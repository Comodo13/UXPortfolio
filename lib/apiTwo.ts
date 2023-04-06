type Data = {
  name: string
  phone: string
  email?: string
}

export const sendLeadbitForm = async (data: Data) => {
  return await fetch('/api/sendLeadbitForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

//
