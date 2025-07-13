import requests
from bs4 import BeautifulSoup

def scrape_reviews(movie_id="95369", page=1):
    url = f"https://eiga.com/movie/{movie_id}/review/all/{page}/"
    headers = {"User-Agent": "Mozilla/5.0"}

    res = requests.get(url, headers=headers)
    if res.status_code != 200:
        print("Status code:", res.status_code)
        return []

    soup = BeautifulSoup(res.text, "html.parser")

    reviews = []

    # レビュー本文が入っている div を取得
    review_blocks = soup.select("div.txt-block")

    print(f"Found {len(review_blocks)} reviews")

    for block in review_blocks:
        try:
            body = block.select_one("p.short").get_text(separator="\n").strip()

            # ユーザー名や日付は別のdivにある場合もあるので、今は省略（必要なら追加OK）
            reviews.append({
                "body": body
            })
        except Exception as e:
            print("Parse error:", e)
            continue

    return reviews

if __name__ == "__main__":
    results = scrape_reviews(movie_id="95369", page=1)
    for i, item in enumerate(results):
        print(f"\n--- Review {i+1} ---\n{item['body']}")
