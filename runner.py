import subprocess
import os
import time

# Define paths to the server and build directory
server_path = os.path.join('/Users/rahul/dev/Projects/Billy', 'server', 'app.js')
build_path = os.path.join('/Users/rahul/dev/Projects/Billy', 'build')

# Define the command to start the Node server
node_command = ['node', server_path]

# Define the command to serve the React project
serve_command = ['npx', 'serve', '-s', build_path]

# Start the Node server
os.chdir('/Users/rahul/dev/Projects/Billy/server')
node_process = subprocess.Popen(node_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
print("Node server started.")
os.chdir('/Users/rahul/dev/Projects/Billy')

# Give the Node server some time to start properly
time.sleep(5)

# Start the React project
serve_process = subprocess.Popen(serve_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
print("React project served.")

# Function to monitor and log outputs
def log_output(process, name):
    for line in iter(process.stdout.readline, b''):
        print(f"[{name}] {line.decode().strip()}")
    for line in iter(process.stderr.readline, b''):
        print(f"[{name} ERROR] {line.decode().strip()}")

try:
    # Log outputs from both processes
    log_output(node_process, "Node Server")
    log_output(serve_process, "React Serve")
except KeyboardInterrupt:
    print("Terminating processes...")

    # Terminate the processes on script termination
    node_process.terminate()
    serve_process.terminate()
    node_process.wait()
    serve_process.wait()
    
    print("Processes terminated.")
