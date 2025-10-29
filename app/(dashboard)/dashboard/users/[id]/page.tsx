
const UserDetails = async({params} :{params: Promise<{id: string}>}) => {
    
    const {id} = await params;

  return (
    <div>UserDetails for user # {id}</div>
  )
}

export default UserDetails