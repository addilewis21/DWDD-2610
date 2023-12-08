# Python 3.x
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

# Serve files from the current directory
with TCPServer(("", 8000), SimpleHTTPRequestHandler) as httpd:
  print("Serving at port", 8000)
  httpd.serve_forever()