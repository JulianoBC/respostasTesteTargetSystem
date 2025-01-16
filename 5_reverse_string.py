def reverse_string(text):
    reversed_text = ""
    for i in range(len(text) - 1, -1, -1):
        reversed_text += text[i]
    return reversed_text

if __name__ == "__main__":
    text = "Hello World"
    reversed_text = reverse_string(text)
    print(reversed_text)