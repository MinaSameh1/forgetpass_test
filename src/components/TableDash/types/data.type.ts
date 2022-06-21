export interface data {
  id: string
  school: string
  country: string
  email: string
  phoneNumber: string
  teachers: teacher[]
  address: string
  postalCode: number
  province: string
  submittedBy: string
  approvedBy: string | null
  rejectedBy: string | null
  updatedAt: string
  status: status
}

export interface teacher {
  name: string
}

export enum status {
  pending,
  approved,
  rejected
}
