import Image from "next/image";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, Github, Youtube } from 'lucide-react';
import { getContactInfo, ContactInfo } from "@/lib/sanityQueries";

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'linkedin':
      return <Linkedin size={20} />;
    case 'twitter':
      return <Twitter size={20} />;
    case 'facebook':
      return <Facebook size={20} />;
    case 'instagram':
      return <Instagram size={20} />;
    case 'github':
      return <Github size={20} />;
    case 'youtube':
      return <Youtube size={20} />;
    default:
      return null;
  }
};

export default async function Footer() {
  let contactInfo: ContactInfo | null = null;
  try {
    contactInfo = await getContactInfo();
  } catch (error) {
    console.error('Error fetching contact info:', error);
  }

  const address = contactInfo
    ? `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.state} ${contactInfo.zipCode}`
    : "2805 Foster Avenue, Suite 204\nNashville, TN 37210";

  const googleMapsUrl = contactInfo?.googleMapsUrl || "https://maps.google.com/?q=2805+Foster+Avenue+Suite+204+Nashville+TN+37210";
  const phone = contactInfo?.phone || "+1 (615) 524-2890";
  const email = contactInfo?.email || "support@entapptech.com";

  return (
    <div className="bg-primary text-white py-8 px-4">
      <footer className="max-width md:max-w-[1000px] flex flex-col gap-8">
        {/* Top Section: Logo and Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/icons/Logo.svg"
              width={120}
              height={40}
              alt="entapp tech logo"
              className="w-auto h-8"
            />
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left space-y-2">
            <p className="font-semibold mb-3 text-lg">Contact Us</p>

            {/* Address with Map Icon */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-secondary transition-colors flex items-center justify-center md:justify-end gap-2 cursor-pointer"
            >
              <MapPin size={16} />
              <span className="whitespace-pre-line">
                {address}
              </span>
            </a>

            {/* Phone with Phone Icon */}
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="text-gray-200 hover:text-secondary transition-colors flex items-center justify-start gap-2 cursor-pointer mt-2"
            >
              <Phone size={16} />
              <span>{phone}</span>
            </a>
            {/* email Icon */}
            <a
              href={`mailto:${email}`}
              className="text-gray-200 hover:text-secondary transition-colors flex items-center justify-start gap-2 cursor-pointer mt-2"
            >

              <Mail size={16} />
              <span>{email}</span>
            </a>

            {/* Social Links */}
            {contactInfo?.socialLinks && contactInfo.socialLinks.length > 0 && (
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                {contactInfo.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-secondary transition-colors"
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: Copyright - Always at the bottom */}
        <div className="border-t border-gray-600 pt-4 mt-4">
          <div className="text-center text-[14px] text-gray-300">
            <span>
              <span className="text-secondary font-semibold">ENTAPP</span>
              {" "}Copyright © 2025 All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
