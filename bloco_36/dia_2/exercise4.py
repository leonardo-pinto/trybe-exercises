def students_in_instant(arrivals, departures, time_instant):
  students = 0
  for i in range(len(arrivals)):
    if (arrivals[i] < time_instant < departures[i]):
      students += 1
  return students

arrivals = [1, 2, 3]
departures = [3, 2, 7]
time_instant = 4

print(students_in_instant(arrivals, departures, time_instant)) # 1