import Components from '$/@types/Components';
import NoMoviesAlert from '$/components/NoMoviesAlert';
import { useI18n } from '$/locales'
import { renderMovies } from '$/utils/renderMovies';
import { TextInput } from 'flowbite-react';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

interface HomeProps {
  omdbUri: string;
}

interface OMDBResponse {
  Search: Components.Movie[]
  totalResults: string
  Response: string | boolean;
  Error?: string;
}

export default function Home({ omdbUri }: HomeProps) {
  const t = useI18n();

  const [movieList, setMovieList] = useState<Components.Movie[]>([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (query === "") return setMovieList([]);

    async function fetchMovies() {
      const uri = omdbUri + "&s=" + query.toLowerCase();
      const response = await fetch(uri);
      const data = await response.json() as unknown as OMDBResponse
      if (data.Search) setMovieList(data.Search)
    }

    fetchMovies();
  }, [query, omdbUri])

  return <div>
    <TextInput placeholder={t('metadata.description')} className='my-10 max-w-xs mx-auto'
      rightIcon={AiOutlineSearch} value={query} onChange={event => setQuery(event.target.value)} />
    {movieList.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">{movieList.map(renderMovies)}</div>
    ) : (
      <div className="flex justify-center">
        <NoMoviesAlert />
      </div>
    )}
  </div >
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return { props: { omdbUri: process.env.NEXT_PUBLIC_OMDB_API_KEY ?? "" } }
}