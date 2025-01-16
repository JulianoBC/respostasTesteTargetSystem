def is_fibonacci(number):
    a, b = 0, 1
    fibonacci_sequence = [a, b]
    while b < number:
        a, b = b, a + b
        fibonacci_sequence.append(b)
    if number in fibonacci_sequence:
        return f"The number {number} belongs to the Fibonacci sequence."
    else:
        return f"The number {number} does not belong to the Fibonacci sequence."

if __name__ == "__main__":
    number = 21  # You can change this number
    result = is_fibonacci(number)
    print(result)