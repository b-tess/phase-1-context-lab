/* Your Code Here */

// const uneditedEmployeeRecord = {
//     firstName: '',
//     familyName: '',
//     title: '',
//     payPerHour: 0,
// }

function createEmployeeRecord(arr) {
    const employeeRecord = {
        firstName: '',
        familyName: '',
        title: '',
        payPerHour: 0,
    }
    let index = 0

    for (let key in employeeRecord) {
        employeeRecord[key] = arr[index++]
    }

    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []

    return employeeRecord
}

function createEmployeeRecords(arr) {
    const employeeRecords = []

    arr.forEach((element) => {
        const employeeRecordObject = createEmployeeRecord(element)

        employeeRecords.push(employeeRecordObject)
    })

    return employeeRecords
}

function createTimeInEvent(string) {
    const dateTimeArray = string.split(' ')
    const timeInObject = {
        type: 'TimeIn',
        hour: parseInt(dateTimeArray[1]),
        date: dateTimeArray[0],
    }

    this.timeInEvents.push(timeInObject)
    return this
}

function createTimeOutEvent(string) {
    const dateTimeArray = string.split(' ')
    const timeOutObject = {
        type: 'TimeOut',
        hour: parseInt(dateTimeArray[1]),
        date: dateTimeArray[0],
    }

    this.timeOutEvents.push(timeOutObject)
    return this
}

//dateString
const employeeRecord = createEmployeeRecord(['Julius', 'Caesar', 'General', 27])
const timeIn = createTimeInEvent.call(employeeRecord, '2044-03-14 0900')
const timeOut = createTimeOutEvent.call(employeeRecord, '2044-03-14 2100')

const timeIn2 = createTimeInEvent.call(employeeRecord, '2044-03-15 0900')
const timeOut2 = createTimeOutEvent.call(employeeRecord, '2044-03-15 1100')

function hoursWorkedOnDate(dateString) {
    //Keeping in mind => everyone checks in & out
    let hoursWorked
    if (this.timeInEvents.length > 1) {
        timeInEventsArray = [...this.timeInEvents] //array of objects

        timeInEventsArray.map((timeInEvent, index) => {
            //imeinevent is an object here
            if (timeInEvent.date === dateString) {
                hoursWorked =
                    (this.timeOutEvents[index].hour -
                        this.timeInEvents[index].hour) /
                    100
                return hoursWorked
            }
        })
    } else {
        hoursWorked =
            (this.timeOutEvents[0].hour - this.timeInEvents[0].hour) / 100
    }

    return hoursWorked
}

function wagesEarnedOnDate(dateString) {
    const hoursWorked = hoursWorkedOnDate.call(this, dateString)
    const wages = this.payPerHour * hoursWorked
    return wages
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    // console.log(this)
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    // console.log('dates array:', eligibleDates)

    const payable = eligibleDates.reduce(
        function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this),
        0
    ) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    console.log('amount payable:', payable)

    // return payable
}

allWagesFor.call(employeeRecord)
