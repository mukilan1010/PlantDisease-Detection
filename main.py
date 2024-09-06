from fastapi import FastAPI, Form
from fastapi.responses import RedirectResponse
from sqlalchemy import create_engine, Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Database configuration
DATABASE_URL = "mysql+pymysql://root:Muki%40291024@127.0.0.1/user_registration_db"
engine = create_engine(DATABASE_URL)
Base = declarative_base()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(255), nullable=False)
    last_name = Column(String(255), nullable=False)
    dob = Column(Date, nullable=False)
    gender = Column(String(50), nullable=False)
    mobile_number = Column(String(15), nullable=False)
    state = Column(String(255), nullable=False)
    district = Column(String(255), nullable=False)
    taluk = Column(String(255), nullable=False)
    village = Column(String(255), nullable=False)
    pin_code = Column(String(10), nullable=False)
    email = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)

Base.metadata.create_all(bind=engine)

# Mount the static files directory
app.mount("/static", StaticFiles(directory="C:/websites/form desing/static"), name="static")


@app.post("/register")
async def register_user(
    first_name: str = Form(...),
    last_name: str = Form(...),
    dob: str = Form(...),
    gender: str = Form(...),
    mobile_number: str = Form(...),
    state: str = Form(...),
    district: str = Form(...),
    taluk: str = Form(...),
    village: str = Form(...),
    pin_code: str = Form(...),
    email: str = Form(...),
    password: str = Form(...)
):
    db = SessionLocal()
    new_user = User(
        first_name=first_name,
        last_name=last_name,
        dob=dob,
        gender=gender,
        mobile_number=mobile_number,
        state=state,
        district=district,
        taluk=taluk,
        village=village,
        pin_code=pin_code,
        email=email,
        password=password
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    db.close()
    
    # Redirect to index.html after successful registration
    return RedirectResponse(url="/static/login.html", status_code=303)
