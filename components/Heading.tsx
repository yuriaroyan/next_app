interface HeadinProps{
    tag:any,
    text:string
}
export default function Heading({tag,text}:HeadinProps) {
    const Tag=tag || "h1"
    return <Tag>{text}</Tag>;
  }
  