"use client"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

const Search =()=>{
    return(
        <div className="flex items-center gap-2">
            <Input placeholder="Busque por uma barbearia"/>
            <Button variant="default" size="icon">
                <MagnifyingGlassIcon/>
            </Button>
        </div>
    )
}
export default Search;