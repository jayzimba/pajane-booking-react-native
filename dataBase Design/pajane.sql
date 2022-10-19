CREATE TABLE Booking(
    BookingID int NOT NULL AUTO_INCREMENT,
    TripTripID INT(10) NOT NULL,
    `date` DATE,
    TIME TIME(6),
    adult INT(10),
    childdren INT(10),
    reminder INT(10),
    seatBooked INT(10),
    CustomerCustomerID INT(10) NOT NULL,
    PaymentspaymentID INT(10) NOT NULL,
    PRIMARY KEY(BookingID)
); CREATE TABLE Customer(
    CustomerID INT(10) NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(50),
    Address INT(255),
    contact VARCHAR(12) UNIQUE,
    PASSWORD VARCHAR(250),
    PRIMARY KEY(CustomerID)
); CREATE TABLE Operator(
    OperatorID INT(10) NOT NULL,
    OperatorName VARCHAR(255),
    PRIMARY KEY(OperatorID)
); CREATE TABLE Trip(
    TripID INT(10) NOT NULL AUTO_INCREMENT,
    BusBusId INT(10) NOT NULL,
    seatsBooked INT(10),
    `From` VARCHAR(255),
    `To` VARCHAR(255),
    `date` DATE,
    TIME TIME(6),
    price REAL,
    BusplateNumber VARCHAR(25) NOT NULL,
    PRIMARY KEY(TripID)
); CREATE TABLE Ticket(
    TicketID INT(10) NOT NULL AUTO_INCREMENT,
    BookingBookingID VARCHAR(10) NOT NULL,
    expiration DATE,
    Ticket_StatusStatusID INT(10) NOT NULL,
    passengers INT(10),
    PRIMARY KEY(TicketID)
); CREATE TABLE Bus(
    BusId INT(10) NOT NULL UNIQUE AUTO_INCREMENT,
    OperatorOperatorID INT(10) NOT NULL,
    seats INT(10),
    plateNumber VARCHAR(25) NOT NULL UNIQUE,
    PRIMARY KEY(BusId)
); CREATE TABLE Payments(
    paymentID INT(10) NOT NULL AUTO_INCREMENT,
    payment INT(10),
    PRIMARY KEY(paymentID)
); CREATE TABLE Operator_Admin(
    AdimID INT(10) NOT NULL AUTO_INCREMENT,
    OperatorOperatorID INT(10) NOT NULL,
    fullName VARCHAR(50),
    contact VARCHAR(12),
    PRIMARY KEY(AdimID)
); CREATE TABLE Ticket_Status(
    StatusID INT(10) NOT NULL,
    STATUS VARCHAR
        (255),
        PRIMARY KEY(StatusID)
);
ALTER TABLE
    Bus ADD CONSTRAINT has FOREIGN KEY(OperatorOperatorID) REFERENCES Operator(OperatorID);
ALTER TABLE
    Operator_Admin ADD CONSTRAINT FKOperator_A730256 FOREIGN KEY(OperatorOperatorID) REFERENCES Operator(OperatorID);
ALTER TABLE
    Ticket ADD CONSTRAINT FKTicket785514 FOREIGN KEY(BookingBookingID) REFERENCES Booking(BookingID);
ALTER TABLE
    Trip ADD CONSTRAINT FKTrip242083 FOREIGN KEY(BusBusId) REFERENCES Bus(BusId);
ALTER TABLE
    Booking ADD CONSTRAINT FKBooking233607 FOREIGN KEY(TripTripID) REFERENCES Trip(TripID);
ALTER TABLE
    Booking ADD CONSTRAINT FKBooking873383 FOREIGN KEY(CustomerCustomerID) REFERENCES Customer(CustomerID);
ALTER TABLE
    Ticket ADD CONSTRAINT FKTicket426153 FOREIGN KEY(Ticket_StatusStatusID) REFERENCES Ticket_Status(StatusID);
ALTER TABLE
    Booking ADD CONSTRAINT FKBooking975515 FOREIGN KEY(PaymentspaymentID) REFERENCES Payments(paymentID);