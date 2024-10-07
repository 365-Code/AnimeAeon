import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              width={500}
              height={300}
              src={"/assets/anizone.png"}
              alt="anizone"
            />
            <Image
              width={500}
              height={300}
              src={"/assets/tag.png"}
              alt="anizone"
            />
            {/* <h2 className="mb-6 text-2xl font-semibold text-white">AnimeAeon</h2> */}
            <p className="text-sm">
              Your ultimate destination for anime streaming. Discover, watch,
              and fall in love with anime.
            </p>
          </div>
          {/* <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Anime List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Genres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Schedule
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Help & Info
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Newsletter
            </h3>
            <p className="mb-4 text-sm">
              Stay updated with our latest releases and offers!
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </form>
          </div> */}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-sm">
              &copy; 2024 AnimeAeon. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-white">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
