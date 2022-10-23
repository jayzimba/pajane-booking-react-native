-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2022 at 12:49 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paj_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `BookingID` int(11) NOT NULL,
  `TripTripID` int(10) NOT NULL,
  `date` date DEFAULT NULL,
  `TIME` time(6) DEFAULT NULL,
  `adult` int(10) DEFAULT NULL,
  `childdren` int(10) DEFAULT NULL,
  `reminder` int(10) DEFAULT NULL,
  `seatBooked` int(10) DEFAULT NULL,
  `CustomerCustomerID` int(10) NOT NULL,
  `PaymentspaymentID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bus`
--

CREATE TABLE `bus` (
  `BusId` int(10) NOT NULL,
  `OperatorOperatorID` int(10) NOT NULL,
  `seats` int(10) DEFAULT NULL,
  `plateNumber` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bus`
--

INSERT INTO `bus` (`BusId`, `OperatorOperatorID`, `seats`, `plateNumber`) VALUES
(1, 1, 46, 'ABC 123'),
(2, 2, 56, 'ABC 124'),
(3, 3, 67, 'ABD 343'),
(4, 4, 23, 'ADH 234'),
(5, 5, 23, 'HH3124'),
(6, 6, 45, 'ABC 2021'),
(7, 7, 45, 'GBF 456'),
(8, 8, 45, 'CV567'),
(9, 9, 34, 'GH567'),
(10, 1, 45, 'JK123');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int(10) NOT NULL,
  `fullName` varchar(50) DEFAULT NULL,
  `Address` int(255) DEFAULT NULL,
  `contact` varchar(12) DEFAULT NULL,
  `PASSWORD` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustomerID`, `fullName`, `Address`, `contact`, `PASSWORD`) VALUES
(1, 'Geoffrey zimba', 0, '777603060', 'trffhkua');

-- --------------------------------------------------------

--
-- Table structure for table `operator`
--

CREATE TABLE `operator` (
  `OperatorID` int(12) NOT NULL,
  `OperatorName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operator`
--

INSERT INTO `operator` (`OperatorID`, `OperatorName`) VALUES
(1, 'Power Tools'),
(2, 'Likili'),
(3, 'Mbwe'),
(4, 'FM'),
(5, 'UBZ'),
(6, 'Scorpion'),
(7, 'PostBus'),
(8, 'Juldan'),
(9, 'Euro');

-- --------------------------------------------------------

--
-- Table structure for table `operator_admin`
--

CREATE TABLE `operator_admin` (
  `AdimID` int(10) NOT NULL,
  `OperatorOperatorID` int(10) NOT NULL,
  `fullName` varchar(50) DEFAULT NULL,
  `contact` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `paymentID` int(10) NOT NULL,
  `payment` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`paymentID`, `payment`) VALUES
(1, 'Airtel Money'),
(2, 'MTN Money'),
(3, 'Visa Card');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `TicketID` int(10) NOT NULL,
  `BookingBookingID` int(11) NOT NULL,
  `expiration` date DEFAULT NULL,
  `Ticket_StatusStatusID` int(10) NOT NULL,
  `passengers` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_status`
--

CREATE TABLE `ticket_status` (
  `StatusID` int(10) NOT NULL,
  `STATUS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ticket_status`
--

INSERT INTO `ticket_status` (`StatusID`, `STATUS`) VALUES
(1, 'Booked'),
(2, 'Onboard'),
(3, 'Trip Complete'),
(4, 'Canceled'),
(5, 'Refunded'),
(6, 'Missed');

-- --------------------------------------------------------

--
-- Table structure for table `trip`
--

CREATE TABLE `trip` (
  `TripID` int(10) NOT NULL,
  `BusBusId` int(10) NOT NULL,
  `seatsBooked` int(10) DEFAULT NULL,
  `From` varchar(255) DEFAULT NULL,
  `To` varchar(255) DEFAULT NULL,
  `station` varchar(255) NOT NULL,
  `date` date DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trip`
--

INSERT INTO `trip` (`TripID`, `BusBusId`, `seatsBooked`, `From`, `To`, `station`, `date`, `time`, `price`) VALUES
(1, 1, 6, 'Lusaka', 'Ndola', 'Inter City', '2022-10-25', '00:09:30.723000', 120),
(2, 2, 3, 'Lusaka', 'Ndola', 'Inter City', '2022-10-25', '00:10:00.255000', 135);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BookingID`),
  ADD KEY `foreign key3` (`CustomerCustomerID`),
  ADD KEY `foreign key4` (`PaymentspaymentID`),
  ADD KEY `foreign key6` (`TripTripID`);

--
-- Indexes for table `bus`
--
ALTER TABLE `bus`
  ADD PRIMARY KEY (`BusId`),
  ADD UNIQUE KEY `plateNumber` (`plateNumber`),
  ADD KEY `foreign key2` (`OperatorOperatorID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`);

--
-- Indexes for table `operator`
--
ALTER TABLE `operator`
  ADD PRIMARY KEY (`OperatorID`);

--
-- Indexes for table `operator_admin`
--
ALTER TABLE `operator_admin`
  ADD PRIMARY KEY (`AdimID`),
  ADD KEY `foreign key1` (`OperatorOperatorID`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`paymentID`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`TicketID`),
  ADD KEY `foreign key7` (`BookingBookingID`),
  ADD KEY `foreign key9` (`Ticket_StatusStatusID`);

--
-- Indexes for table `ticket_status`
--
ALTER TABLE `ticket_status`
  ADD PRIMARY KEY (`StatusID`);

--
-- Indexes for table `trip`
--
ALTER TABLE `trip`
  ADD PRIMARY KEY (`TripID`),
  ADD KEY `foreign key10` (`BusBusId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BookingID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bus`
--
ALTER TABLE `bus`
  MODIFY `BusId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `CustomerID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `operator`
--
ALTER TABLE `operator`
  MODIFY `OperatorID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `operator_admin`
--
ALTER TABLE `operator_admin`
  MODIFY `AdimID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `paymentID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `TicketID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ticket_status`
--
ALTER TABLE `ticket_status`
  MODIFY `StatusID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `trip`
--
ALTER TABLE `trip`
  MODIFY `TripID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `foreign key3` FOREIGN KEY (`CustomerCustomerID`) REFERENCES `customer` (`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `foreign key4` FOREIGN KEY (`PaymentspaymentID`) REFERENCES `payments` (`paymentID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `foreign key6` FOREIGN KEY (`TripTripID`) REFERENCES `trip` (`TripID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bus`
--
ALTER TABLE `bus`
  ADD CONSTRAINT `foreign key2` FOREIGN KEY (`OperatorOperatorID`) REFERENCES `operator` (`OperatorID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `operator_admin`
--
ALTER TABLE `operator_admin`
  ADD CONSTRAINT `foreign key1` FOREIGN KEY (`OperatorOperatorID`) REFERENCES `operator` (`OperatorID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `foreign key7` FOREIGN KEY (`BookingBookingID`) REFERENCES `booking` (`BookingID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `foreign key9` FOREIGN KEY (`Ticket_StatusStatusID`) REFERENCES `ticket_status` (`StatusID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trip`
--
ALTER TABLE `trip`
  ADD CONSTRAINT `foreign key10` FOREIGN KEY (`BusBusId`) REFERENCES `bus` (`BusId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
