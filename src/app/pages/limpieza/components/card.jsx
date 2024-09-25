'use client'
import CardContent from "@/app/components/Cards/GlobalCard";
import Clean from "./Clean";

const Card = ({ habitacion }) => {
    return (
        
                <CardContent  habitacion={habitacion} >
                    <Clean habitacion={habitacion} />
                </CardContent>
        
    );
}

export default Card;