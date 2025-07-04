import calendar

print('Welcome to Calendar\n')

year = int(input('Enter year: '))
month = int(input('Enter month: '))

print('\n')

print(calendar.month(year, month))

print('Good bye!')
