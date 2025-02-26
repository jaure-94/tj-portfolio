import { FC } from 'react';
import tjGrayScale from "@/assets/images/tj-smile-gray-scale.jpg";
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Facebook, Github, Instagram, Mail } from 'lucide-react';

const formInputFields = [
  {

  }
]

const Contact: FC = () => {
  return (
    <section className="md:grid md:grid-cols-3 md:min-h-screen bg-stone-400" id="contact">
      {/* Contact Image */}
      <div className="md:col-span-1 h-full rounded-2xl bg-cover bg-center bg-no-repeat bg-fixed">
        <Image
          src={tjGrayScale}
          alt="Tawanda Jaure Portrait Grayscale"
          className="size-full object-cover"
        />
      </div>

      {/* Contact Form */}
      <div className="md:col-span-2 w-full">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl lg:text-7xl">
              Get in touch...
            </h2>

            <div className="flex flex-col items-stretch">
              <form className="lg:w-4/5">
                <div className="pt-5">
                  <input type="text" />
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact