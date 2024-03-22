n = int(input())
lst = list(map(int, input().split()))
print(all(num > 0 for num in lst) and any(str(num) == str(num)[::-1] for num in lst))
