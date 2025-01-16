import json

def analyze_sales(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)

    sales = data['daily_sales']
    valid_sales = [sale['value'] for sale in sales if sale['value'] > 0]

    if not valid_sales:
        return "No sales data available."

    min_sale = min(valid_sales)
    max_sale = max(valid_sales)
    average_sale = sum(valid_sales) / len(valid_sales)
    days_above_average = len([sale for sale in valid_sales if sale > average_sale])

    return {
        "min_sale": min_sale,
        "max_sale": max_sale,
        "days_above_average": days_above_average
    }

if __name__ == "__main__":
    file_path = "daily_sales.json"
    result = analyze_sales(file_path)
    print(result)