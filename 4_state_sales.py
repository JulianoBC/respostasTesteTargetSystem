def calculate_state_percentage():
    state_sales = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    }

    total_sales = sum(state_sales.values())

    state_percentages = {}
    for state, sales in state_sales.items():
        percentage = (sales / total_sales) * 100
        state_percentages[state] = f"{percentage:.2f}%"

    return state_percentages

if __name__ == "__main__":
    result = calculate_state_percentage()
    print(result)