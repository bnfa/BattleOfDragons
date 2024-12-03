import { Dragon } from "../../../../server/models/Dragon.interface";
import { DragonCardContainer, DragonCardTitle, ProgressBar, DragonProps, Line } from "./DragonCard.styled"

type DragonCardProps = {
    dragon?: Dragon | null
    title?: string
}

const DragonCard: React.FC<DragonCardProps> = ({ title, dragon }) => {
    return (
        <>
            {
                !dragon ? (
                    <DragonCardContainer centralized>
                        <DragonCardTitle>{title!}</DragonCardTitle>
                    </DragonCardContainer>
                ) : (
                    <DragonCardContainer>
                        <DragonCardTitle>{title!}</DragonCardTitle>
                        <Line />
                        <DragonProps >HP</DragonProps>
                        <ProgressBar variant="determinate" value={dragon?.hp} />
                        <DragonProps>Attack</DragonProps>
                        <ProgressBar variant="determinate" value={dragon?.attack} />
                        <DragonProps>Defense</DragonProps>
                        <ProgressBar variant="determinate" value={dragon?.defense} />
                        <DragonProps>Speed</DragonProps>
                        <ProgressBar variant="determinate" value={dragon?.speed} />
                    </DragonCardContainer>
                )
            }
        </>

    )
}

export { DragonCard }