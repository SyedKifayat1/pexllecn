// import Image from "next/image";
// import { BookmarkIcon } from '@heroicons/react/solid';

// export default function MovieCardTop() {
//   return (
//     <div className="flex justify-start space-x-4 overflow-x-auto hide-scrollbar overflow-hidden">
//       <div
//         className="max-w-md rounded-lg p-1  mb-3 hover:shadow-lg hover:bg-gray-200"
//         style={{ width: 260, height: 170 }}
//       >
//         <div
//           className="relative flex-shrink-0 overflow-hidden"
//           style={{ width: 200, height: 110 }}
//         >
//           {/* Replace the image source and adjust dimensions as needed */}
//           <img
//             src="/movies/a.avif"
//             alt="Movie Poster"
//             className="rounded-lg w-full h-30 object-cover"
//           />
//           <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//             <p className="bg-white rounded-sm px-1 font-bold text-xs">4.7</p>
//           </div>
//           <div className="absolute bottom-0 left-0 m-2">
//             <div className="h-1 w-20 bg-white rounded-lg"></div>
//           </div>
//         </div>
//         {/* <div className="p-1">
//           <p className="text-lg font-bold text-gray-800">Heat</p>
//           <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//         </div> */}
//         <div className="flex items-center justify-between p-1">
//             <div>
//               <p className="text-lg font-bold text-gray-800">Heat</p>
//               <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//             </div>
//             <div className="ml-2">
//               {/* Your save icon goes here */}
//               <BookmarkIcon className="h-6 w-8" />
//             </div>
//           </div>
//       </div>

//       <div
//         className="max-w-md rounded-lg p-1  mb-3 hover:shadow-lg hover:bg-gray-200"
//         style={{ width: 260, height: 170 }}
//       >
//         <div
//           className="relative flex-shrink-0 overflow-hidden"
//           style={{ width: 200, height: 110 }}
//         >
//           {/* Replace the image source and adjust dimensions as needed */}
//           <img
//             src="/movies/a.avif"
//             alt="Movie Poster"
//             className="rounded-lg w-full h-30 object-cover"
//           />
//           <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//             <p className="bg-white rounded-sm px-1 font-bold text-xs">4.7</p>
//           </div>
//           <div className="absolute bottom-0 left-0 m-2">
//             <div className="h-1 w-20 bg-white rounded-lg"></div>
//           </div>
//         </div>
//         <div className="p-1">
//           <p className="text-xl font-bold text-gray-800">Batman Begins</p>
//           <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//         </div>
//       </div>
//       <div
//         className="max-w-md rounded-lg p-1  mb-3 hover:shadow-lg hover:bg-gray-200"
//         style={{ width: 260, height: 170 }}
//       >
//         <div
//           className="relative flex-shrink-0 overflow-hidden"
//           style={{ width: 200, height: 110 }}
//         >
//           {/* Replace the image source and adjust dimensions as needed */}
//           <img
//             src="/movies/a.avif"
//             alt="Movie Poster"
//             className="rounded-lg w-full h-30 object-cover"
//           />
//           <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//             <p className="bg-white rounded-sm px-1 font-bold text-xs">4.5</p>
//           </div>
//           <div className="absolute bottom-0 left-0 m-2">
//             <div className="h-1 w-20 bg-white rounded-lg"></div>
//           </div>
//         </div>
//         <div className="p-1">
//           <p className="text-xl font-bold text-gray-800">The Professional</p>
//           <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//         </div>
//       </div>
//       <div
//         className="max-w-md rounded-lg p-1  mb-3 hover:shadow-lg hover:bg-gray-200"
//         style={{ width: 260, height: 170 }}
//       >
//         <div
//           className="relative flex-shrink-0 overflow-hidden"
//           style={{ width: 200, height: 110 }}
//         >
//           {/* Replace the image source and adjust dimensions as needed */}
//           <img
//             src="/movies/a.avif"
//             alt="Movie Poster"
//             className="rounded-lg w-full h-30 object-cover"
//           />
//           <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//             <p className="bg-white rounded-sm px-1 font-bold text-xs">4.6</p>
//           </div>
//           <div className="absolute bottom-0 left-0 m-2">
//             <div className="h-1 w-20 bg-white rounded-lg"></div>
//           </div>
//         </div>
//         <div className="p-1">
//           <p className="text-lg font-bold text-gray-800">Matrix</p>
//           <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//         </div>
//       </div>
//       <div
//         className="max-w-md rounded-lg p-1  mb-3 hover:shadow-lg hover:bg-gray-200"
//         style={{ width: 260, height: 170 }}
//       >
//         <div
//           className="relative flex-shrink-0 overflow-hidden"
//           style={{ width: 200, height: 110 }}
//         >
//           {/* Replace the image source and adjust dimensions as needed */}
//           <img
//             src="/movies/a.avif"
//             alt="Movie Poster"
//             className="rounded-lg w-full h-30 object-cover"
//           />
//           <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//             <p className="bg-white rounded-sm px-1 font-bold text-xs">4.0</p>
//           </div>
//           <div className="absolute bottom-0 left-0 m-2">
//           <div className="h-1 w-28 bg-white rounded-lg"></div>
//         </div>
//         </div>
//         <div className="p-1">
//           <p className="text-lg font-bold text-gray-800">Fight Club</p>
//           <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//         </div>
//       </div>
//       <div
//         className="max-w-md rounded-lg p-1  mb-3 hover:shadow-lg hover:bg-gray-200"
//         style={{ width: 260, height: 170 }}
//       >
//         <div
//           className="relative flex-shrink-0 overflow-hidden"
//           style={{ width: 200, height: 110 }}
//         >
//           {/* Replace the image source and adjust dimensions as needed */}
//           <img
//             src="/movies/a.avif"
//             alt="Movie Poster"
//             className="rounded-lg w-full h-30 object-cover"
//           />
//           <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//             <p className="bg-white rounded-sm px-1 font-bold text-xs">4.7</p>
//           </div>
//           <div className="absolute bottom-0 left-0 m-2">
//             <div className="h-1 w-20 bg-white rounded-lg"></div>
//           </div>
//         </div>
//         <div className="p-1">
//           <p className="text-lg font-bold text-gray-800">The Super Hero</p>
//           <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//         </div>
//       </div>
//       <div
//         className="max-w-md rounded-lg p-1  mb-3 hover:shadow-lg hover:bg-gray-200"
//         style={{ width: 260, height: 170 }}
//       >
//         <div
//           className="relative flex-shrink-0 overflow-hidden"
//           style={{ width: 200, height: 110 }}
//         >
//           {/* Replace the image source and adjust dimensions as needed */}
//           <img
//             src="/movies/a.avif"
//             alt="Movie Poster"
//             className="rounded-lg w-full h-30 object-cover"
//           />
//           <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//             <p className="bg-white rounded-sm px-1 font-bold text-xs">4.7</p>
//           </div>
//           <div className="absolute bottom-0 left-0 m-2">
//             <div className="h-1 w-20 bg-white rounded-lg"></div>
//           </div>
//         </div>
//         <div className="p-1">
//           <p className="text-lg font-bold text-gray-800">Heat</p>
//           <p className="text-sm text-gray-600">Action, Sci-Fi, Hero</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from 'next/image';
// import { BookmarkIcon } from '@heroicons/react/solid';

// const MovieCard = ({ title, genres, rating, imagePath }) => (
//   <div className="max-w-md rounded-lg p-1 mb-3 hover:shadow-lg hover:bg-gray-200" style={{ width: 260, height: 170 }}>
//     <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 200, height: 110 }}>
//       <Image src={imagePath} alt="Movie Poster" className="rounded-lg w-full h-30 object-cover" />
//       <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
//         <p className="bg-white rounded-sm px-1 font-bold text-xs">{rating}</p>
//       </div>
//       <div className="absolute bottom-0 left-0 m-2">
//         <div className="h-1 w-20 bg-white rounded-lg"></div>
//       </div>
//     </div>
//     <div className="p-1">
//       <p className="text-lg font-bold text-gray-800">{title}</p>
//       <p className="text-sm text-gray-600">{genres}</p>
//     </div>
//     <div className="flex items-center justify-between p-1">
//       <div>
//         <p className="text-lg font-bold text-gray-800">{title}</p>
//         <p className="text-sm text-gray-600">{genres}</p>
//       </div>
//       <div className="ml-2">
//         <BookmarkIcon className="h-6 w-8" />
//       </div>
//     </div>
//   </div>
// );

// const movieData = [
//   { title: 'Heat', genres: 'Action, Sci-Fi, Hero', rating: '4.7', imagePath: '/movies/a.avif' },
//   { title: 'Batman Begins', genres: 'Action, Sci-Fi, Hero', rating: '4.7', imagePath: '/movies/a.avif' },
//   { title: 'The Professional', genres: 'Action, Sci-Fi, Hero', rating: '4.5', imagePath: '/movies/a.avif' },
//   { title: 'Matrix', genres: 'Action, Sci-Fi, Hero', rating: '4.6', imagePath: '/movies/a.avif' },
//   { title: 'Fight Club', genres: 'Action, Sci-Fi, Hero', rating: '4.0', imagePath: '/movies/a.avif' },
//   { title: 'The Super Hero', genres: 'Action, Sci-Fi, Hero', rating: '4.7', imagePath: '/movies/a.avif' },
//   { title: 'Heat', genres: 'Action, Sci-Fi, Hero', rating: '4.7', imagePath: '/movies/a.avif' },
// ];

// const YourComponent = () => (
//   <div className="flex justify-start space-x-4 overflow-x-auto hide-scrollbar overflow-hidden">
//     {movieData.map((movie, index) => (
//       <MovieCard key={index} {...movie} />
//     ))}
//   </div>
// );

// export default YourComponent;

import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/solid";

const MovieList = () => {
  const movies = [
    {
      title: "Heat",
      genres: "Action, Sci-Fi, Hero",
      rating: "4.7",
      imagePath: "/movies/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      title: "Heat",
      genres: "Action, Sci-Fi, Hero",
      rating: "4.7",
      imagePath: "/movies/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      title: "Heat",
      genres: "Action, Sci-Fi, Hero",
      rating: "4.7",
      imagePath: "/movies/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      title: "Heat",
      genres: "Action, Sci-Fi, Hero",
      rating: "4.7",
      imagePath: "/movies/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      title: "Heat",
      genres: "Action, Sci-Fi, Hero",
      rating: "4.7",
      imagePath: "/movies/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      title: "Heat",
      genres: "Action, Sci-Fi, Hero",
      rating: "4.7",
      imagePath: "/movies/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },

    // ... add more movie data
  ];

  return (
    <div className="flex justify-start space-x-4 overflow-x-auto hide-scrollbar overflow-hidden">
      {movies.map((movie) => (
        <div
          key={movie.title}
          className="max-w-md rounded-lg p-1 mb-3 hover:shadow-lg hover:bg-gray-200"
          style={{ width: 260, height: 170 }}
        >
          <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: 200, height: 110 }}
          >
            <Image
              src={movie.imagePath}
              alt="Movie Poster"
              width={movie.imageWidth}
              height={movie.imageHeight}
              className="rounded-lg w-full h-30 object-cover"
            />
            <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
              <p className="bg-white rounded-sm px-1 font-bold text-xs">
                {movie.rating}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <div className="h-1 w-20 bg-white rounded-lg"></div>
            </div>
          </div>
          <div className="p-1">
            <p className="text-lg font-bold text-gray-800">{movie.title}</p>
            <p className="text-sm text-gray-600">{movie.genres}</p>
          </div>
          <div className="flex items-center justify-between p-1">
            <div>
              <p className="text-lg font-bold text-gray-800">{movie.title}</p>
              <p className="text-sm text-gray-600">{movie.genres}</p>
            </div>
            <div className="ml-2">
              {/* Ensure you have imported the BookmarkIcon component */}
              <BookmarkIcon className="h-6 w-8" />
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default MovieList;
