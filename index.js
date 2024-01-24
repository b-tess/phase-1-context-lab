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

    employeeRecord.timeInEvents = employeeRecord.timeOutEvents = []

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

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(
        function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this),
        0
    ) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
