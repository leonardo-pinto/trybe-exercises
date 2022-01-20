failed_students = []

with open("exceptions_example.txt") as grade_files:
    for line in grade_files:
        student_grade = line.split()
        if int(student_grade[1]) < 6:
            failed_students.append(student_grade[0] + "\n")

with open("failed_students.txt", mode="w") as failed_students_file:
    failed_students_file.writelines(failed_students)
