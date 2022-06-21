/**
 * This file is meant to mock data, it is made to be ran alone.
 */
import { faker } from '@faker-js/faker'
import type { data, teacher } from './../../components/TableDash/types'
import * as fs from 'fs'

function getTeachers() {
  const teacher: teacher[] = []
  const amount = Math.random() * 3
  for (let i = 0; i < amount; i++)
    teacher.push({
      name: faker.name.firstName(),
    })

  return teacher
}

function getNameAndDate() {
  return faker.name.firstName() + '(' + faker.date.recent(10) + ')'
}

function getStatus() {
  const random = Math.random() * 3

  switch (random) {
    case 1:
      return {
        approvedBy: getNameAndDate(),
        rejectedBy: null,
        status: 1,
      }
    case 2:
      return {
        approvedBy: null,
        rejectedBy: getNameAndDate(),
        status: 2,
      }
    default:
      return {
        approvedBy: null,
        rejectedBy: null,
        status: 0,
      }
  }
}

function getData(): data {
  return {
    id: faker.datatype.uuid(),
    school: faker.company.companyName(),
    country: faker.address.county(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    province: faker.address.cityName(),
    teachers: getTeachers(),
    address: faker.address.streetAddress(),
    postalCode: Number(faker.address.zipCode()),
    submittedBy: getNameAndDate(),
    updatedAt: getNameAndDate(),
    ...getStatus(),
  }
}

function createData() {
  const amount = 1000
  const data: data[] = []

  for (let i = 0; i < amount; i++) {
    data.push(getData())
  }
  fs.writeFile(
    'data.json',
    JSON.stringify(data, null, 2),
    { encoding: 'utf8', flag: 'a' },
    (err) => {
      if (err) throw err
    }
  )
}

createData()
