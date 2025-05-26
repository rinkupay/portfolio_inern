import Image from "next/image";
import ProfileImage from "@/images/profile.jpg";

export default function ProfileSection({ profile }) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Image
          src={ProfileImage}
          alt={`${profile.name}'s photo`}
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-gray-200 shadow-md"
        />

        <div className="text-center md:text-left w-full">
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed">
            {profile.bio}
          </p>

          <div className="mt-6 space-y-2 text-gray-700 text-sm">
            <p>
              <span className="font-medium">📧 Email:</span>{" "}
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-blue-600 hover:underline"
              >
                {profile.contact.email}
              </a>
            </p>
            <p>
              <span className="font-medium">📞 Phone:</span> {profile.contact.phone}
            </p>
            <p>
              <span className="font-medium">📍 Location:</span> {profile.contact.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
