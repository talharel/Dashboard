import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('http://localhost:8000/users/gender', () => {
    return HttpResponse.json({
      male: '60',
      female: '40',
    });
  }),

  http.get('http://localhost:8000/users/ages', async ({ request }) => {
    const url = new URL(request.url);
    const gap = parseInt(url.searchParams.get('gap')!);
    const ages: Record<string, number> = {};
    let start = 10;
    let end = start + gap;

    while (end < 100) {
      ages[`${start}-${end}`] = start;
      start += gap;
      end += gap;
    }
    return HttpResponse.json(ages);
  }),
];
