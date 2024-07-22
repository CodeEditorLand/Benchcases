import matplotlib.pyplot as plt

# Data
x = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30, 40, 200]
y = [440, 692, 1050, 1380, 1720, 2120, 2401, 2780, 3160, 3400, 3930, 5310, 7260, 32540]

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, marker='o')

# Add title and labels
plt.title('Execution Time vs Hook Size')
plt.xlabel('Hook Size')
plt.ylabel('Execution Time (ms)')

# Annotate points with input sizes
for i in range(len(x)):
    plt.annotate(f'{x[i]}', (x[i], y[i]), textcoords="offset points", xytext=(0, 10), ha='center')

# Show grid
plt.grid(True)

# Show the plot
plt.show()

