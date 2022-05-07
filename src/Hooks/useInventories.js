import { useEffect, useState } from "react"

const useInventories = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://dry-citadel-76897.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useInventories;