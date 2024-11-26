import PropTypes from "prop-types";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export const BeritaItem = ({ item }) => {
  return (
    <>
      <Card
        shadow="sm"
        key={item.id}
        className="border rounded-md shadow-sm"
      >
        <CardBody className="overflow-visible p-2 md:p-3 lg:p-4">
          <Link href={`/berita/${item.id}`} className="flex w-full">
            <Image
              className="rounded-t-xl md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
              layout="responsive"
              width={16}
              height={9}
              alt={item.title}
              src={item.imageUrl}
            />
          </Link>
        </CardBody>
        <CardFooter className="flex-col items-start text-left p-2 gap-2 md:p-3 md:gap-3 lg:p-4 lg:gap-4">
          <p className="text-md md:text-lg lg:text-xl font-bold my-1">{item.title}</p>
          <b className="text-xs lg:text-sm text-gray-700">{item.bidang}</b>
          <p className="text-sm lg:text-md mb-4 ">{item?.isiBerita.substring(0, 85)}...</p>
          <div className=" w-full">
            <Link href={`/berita/${item.id}`} className="w-full">
              <Button className="w-full py-2 text-center text-white bg-blue-secondary rounded-lg">
                Selengkapnya
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>

    </>
  );
};

BeritaItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isiBerita: PropTypes.string.isRequired,
    bidang: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};
