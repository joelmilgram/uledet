import csv
from datetime import datetime

def transform_ged_to_csv(input_file, output_file):
    """
    Transforms a GED file into a CSV file with specific formatting,
    including error handling to identify problematic GED blocks.

    Args:
        input_file (str): Path to the input GED file.
        output_file (str): Path to the output CSV file.
    """

    with open(input_file, 'r', encoding='utf-8') as ged_file, \
            open(output_file, 'w', newline='', encoding='utf-8') as csv_file:

        csv_writer = csv.writer(csv_file)
        group_data = {'NAME': '', 'DATE': []}
        ged_block = []
        line_number = 0

        try:
            for line in ged_file:
                line_number += 1
                line = line.strip()

                if line.startswith('1 NAME'):
                    # Process the previous group if it exists
                    if group_data:
                        write_csv_rows(csv_writer, group_data)

                    # Start a new group
                    group_data = {'NAME': line.split('NAME', 1)[1].strip(), 'DATE': []}
                    ged_block = [line]  # Start a new GED block

                elif line.startswith('2 DATE'):
                    date_str = line.split('DATE', 1)[1].strip()
                    group_data['DATE'].append(date_str)
                    ged_block.append(line)  # Add to the current GED block
                else:
                    # Ignore other lines within the GED block
                    if group_data:
                        ged_block.append(line)

            # Process the last group if it exists
            if group_data:
                write_csv_rows(csv_writer, group_data)

        except Exception as e:
            print(f"Error processing GED file at line {line_number}: {e}")
            print("GED Block:")
            for ged_line in ged_block:
                print(ged_line)
            print("Please check the format and content of this block.")

def write_csv_rows(csv_writer, group_data):
    """
    Writes the CSV rows based on the extracted group data.

    Args:
        csv_writer (csv.writer): CSV writer object.
        group_data (dict): Dictionary containing extracted data.
    """
    name = group_data['NAME']
    # Remove '/' characters from the name
    name = name.replace('/', '')

    # Transform surname to have only the initial capital
    parts = name.split()
    transformed_parts = []
    for part in parts:
        if part.isupper():
            transformed_parts.append(part.capitalize())
        else:
            transformed_parts.append(part)
    name = ' '.join(transformed_parts)

    dates = group_data['DATE']

    if dates:
        # Format the dates to dd/MM/yyyy
        formatted_dates = []
        for date_str in dates:
            try:
                date_object = datetime.strptime(date_str, '%d %b %Y')
                formatted_date = date_object.strftime('%d/%m/%Y')
                formatted_dates.append(formatted_date)
            except ValueError:
                # Skip invalid dates
                continue

        if formatted_dates:
            csv_writer.writerow([name, formatted_dates[0]])
            if len(formatted_dates) > 1:
                csv_writer.writerow(['Décès ' + name, formatted_dates[1]])

if __name__ == '__main__':
    input_ged_file = 'f6cyi7_579788b6jeq3f1xc29aeb7_A.ged'  # Replace with your input GED file
    output_csv_file = 'output.csv'  # Replace with your desired output CSV file
    transform_ged_to_csv(input_ged_file, output_csv_file)
    print(f"Transformation complete. Output written to {output_csv_file}")
