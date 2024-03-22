input_str = input()

sorted_str = sorted(input_str, key=lambda x: (x.isdigit() and int(x) % 2 == 0, x.isdigit(), x.isupper(), x.islower(), x))
sorted_output = ''.join(sorted_str)

print(sorted_output)