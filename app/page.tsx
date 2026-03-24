import Hero from '@/components/home/Hero';
import FeaturedMedia from '@/components/home/FeaturedMedia';
import RecentNews from '@/components/home/RecentNews';
import videosData from '@/data/videos.json';
import photosData from '@/data/photos.json';
import newsData from '@/data/news.json';
import { Video, Photo, NewsItem } from '@/lib/types';

export default function Home() {
  const videos = videosData as Video[];
  const photos = photosData as Photo[];
  const news = newsData as NewsItem[];

  return (
    <>
      <Hero />
      <FeaturedMedia videos={videos} photos={photos} />
      <RecentNews news={news} />
    </>
  );
}
