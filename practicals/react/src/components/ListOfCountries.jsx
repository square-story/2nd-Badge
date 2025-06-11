import { useState } from "react"

const ListOfCountries = () => {
    const [query, setQuery] = useState('')
    const countries = ['india', 'africa', 'canada', 'germany', 'us', 'japan', 'korea']
    const filtered = countries.filter(item => {
        return item.toLowerCase().includes(query.toLowerCase())
    })
    return (
        <>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Country" />
            <ul>
                {filtered.map((c, i) => (
                    <li key={i}>
                        {c}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListOfCountries