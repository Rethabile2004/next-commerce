import { Separator } from "../ui/separator"

const SectionTitle = ({ text }: { text: string }) => {
    return (
        <div>
            <h2 className="text-3xl capitalize tracking-wider mb-8 font-medium">{text}</h2>
            <Separator />
        </div>
    )
}

export default SectionTitle