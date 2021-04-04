from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    print("yolo")
    return {"message": "Hello World"}