from test import scrape_reviews
import neologdn


def normalize_text():
    results = scrape_reviews(movie_id="95369", page=1)
    text_list = []
    print(results[0]['body'])
    for i, item in enumerate(results):
        normalized_text = neologdn.normalize(results[i]['body'])
        print(normalized_text)
        text_list.append(normalized_text)
    print(text_list[0])
    print(text_list[1])
    print(text_list[2])
    return text_list

if __name__ == "__main__":
    res = normalize_text()