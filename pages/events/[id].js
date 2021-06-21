import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

function EventDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const eventDetail = getEventById(id);
  console.log(eventDetail);

  return (
    <div>
      <h1>Event Detail</h1>
    </div>
  );
}

export default EventDetailPage;
