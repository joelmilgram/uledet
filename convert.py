liste: list[dict[str, str]] = [
{ "type": "birth", "name": "Arel Milgram", "greg_date": "6/8/2024", "heb_cal": "", "notes": "", "target": "papa, joel" },
{ "type": "birth", "name": "Naama", "greg_date": "12/10/2023", "heb_cal": "", "notes": "", "target": "papa, joel" },
{ "type": "birth", "name": "Hanna Aouva Valershteiner", "greg_date": "27/4/2023", "heb_cal": "", "notes": "", "target": "papa, joel" },
{ "type": "birth", "name": "Malka Valershteiner", "greg_date": "30/9/2024", "heb_cal": "", "notes": "", "target": "papa, joel" }]


import requests

if __name__ == "__main__":
    for entry in liste:
        day, month, year = map(int, entry['greg_date'].split('/'))
        url: str = "https://www.hebcal.com/converter?cfg=json&gy=" + str(year) + "&gm=" + str(month) + "&gd=" + str(day) + "&g2h=1"
        response: requests.Response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            entry["heb_cal"] = f"{data['hd']} {data['hm']} {data['hy']}"
            import json
            print(json.dumps(entry, ensure_ascii=False) + ",")
        else:
            print(f"Error: {response.status_code}")
        import time
        time.sleep(1)