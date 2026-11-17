import { Image } from "@/components/ui/image";

const TINTS = ["#FBF0B6", "#DCEFEE", "#F8E0EC", "#E7DEF4", "#FBEBD4", "#E6F1E4"];

export default function Avatar({ person, className = "" }) {
  const initials = person.name.split(" ").filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("");
  if (person.photo_url) {
    return <Image src={person.photo_url} alt={`Foto de ${person.name}`} className={`border border-[#EDE7DC] object-cover ${className}`} />;
  }
  const tint = TINTS[person.name.length % TINTS.length];
  return (
    <div className={`flex items-center justify-center border border-[#EDE7DC] ${className}`} style={{ background: tint }} role="img" aria-label={person.name}>
      <span className="font-heading text-4xl font-medium text-[#1E6E71]/70">{initials}</span>
    </div>
  );
}