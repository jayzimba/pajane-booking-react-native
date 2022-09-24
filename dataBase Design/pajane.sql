CREATE TABLE Booking (
  BookingID          varchar(10) NOT NULL AUTO INCREAMENT, 
  TripTripID         int(10) NOT NULL, 
  `date`             date, 
  time               time(7), 
  adult              int(10), 
  childdren          int(10), 
  reminder           int(10), 
  seatBooked         int(10), 
  CustomerCustomerID int(10) NOT NULL, 
  PaymentspaymentID  int(10) NOT NULL, 
  PRIMARY KEY (BookingID));
CREATE TABLE Customer (
  CustomerID int(10) NOT NULL, 
  fullName   varchar(50), 
  Address    int(255), 
  contact    varchar(10) UNIQUE, 
  password   varchar(250), 
  PRIMARY KEY (CustomerID));
CREATE TABLE Operator (
  OperatorID   int(10) NOT NULL, 
  OperatorName varchar(255), 
  PRIMARY KEY (OperatorID));
CREATE TABLE Trip (
  TripID         int(10) NOT NULL, 
  BusBusId       int(10) NOT NULL, 
  seatsBooked    int(10), 
  `From`         varchar(255), 
  `To`           varchar(255), 
  `date`         date, 
  time           time(7), 
  price          real, 
  BusplateNumber varchar(25) NOT NULL, 
  PRIMARY KEY (TripID));
CREATE TABLE Ticket (
  TicketID              int(10) NOT NULL, 
  BookingBookingID      varchar(10) NOT NULL, 
  expiration            date, 
  Ticket_StatusStatusID int(10) NOT NULL, 
  passengers            int(10), 
  PRIMARY KEY (TicketID));
CREATE TABLE Bus (
  BusId              int(10) NOT NULL UNIQUE, 
  OperatorOperatorID int(10) NOT NULL, 
  seats              int(10), 
  plateNumber        varchar(25) NOT NULL UNIQUE, 
  PRIMARY KEY (BusId, 
  plateNumber));
CREATE TABLE Payments (
  paymentID int(10) NOT NULL, 
  payment   int(10), 
  PRIMARY KEY (paymentID));
CREATE TABLE Operator_Admin (
  AdimID             int(10) NOT NULL, 
  OperatorOperatorID int(10) NOT NULL, 
  fullName           varchar(50), 
  contact            varchar(10), 
  PRIMARY KEY (AdimID));
CREATE TABLE  (
  CustomerCustomerID int(10) NOT NULL);
CREATE TABLE Ticket_Status (
  StatusID int(10) NOT NULL, 
  Status   varchar(255), 
  PRIMARY KEY (StatusID));
ALTER TABLE Bus ADD CONSTRAINT has FOREIGN KEY (OperatorOperatorID) REFERENCES Operator (OperatorID);
ALTER TABLE Operator_Admin ADD CONSTRAINT FKOperator_A730256 FOREIGN KEY (OperatorOperatorID) REFERENCES Operator (OperatorID);
ALTER TABLE Ticket ADD CONSTRAINT FKTicket785514 FOREIGN KEY (BookingBookingID) REFERENCES Booking (BookingID);
ALTER TABLE Trip ADD CONSTRAINT FKTrip242083 FOREIGN KEY (BusBusId, BusplateNumber) REFERENCES Bus (BusId, plateNumber);
ALTER TABLE Booking ADD CONSTRAINT FKBooking233607 FOREIGN KEY (TripTripID) REFERENCES Trip (TripID);
ALTER TABLE  ADD CONSTRAINT FK214562 FOREIGN KEY (CustomerCustomerID) REFERENCES Customer (CustomerID);
ALTER TABLE Booking ADD CONSTRAINT FKBooking873383 FOREIGN KEY (CustomerCustomerID) REFERENCES Customer (CustomerID);
ALTER TABLE Ticket ADD CONSTRAINT FKTicket426153 FOREIGN KEY (Ticket_StatusStatusID) REFERENCES Ticket_Status (StatusID);
ALTER TABLE Booking ADD CONSTRAINT FKBooking975515 FOREIGN KEY (PaymentspaymentID) REFERENCES Payments (paymentID);
