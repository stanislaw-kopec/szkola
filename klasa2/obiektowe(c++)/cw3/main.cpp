#include <string>
#include <iostream>
//struct  class
using namespace std;
struct Book {
	//pola
    string title;
    string author;
    int page;
	//metody
    void Show();//deklaracja metody Show
    Book();//konstruktor domyslny
    Book(string title, string author, int pages=100);
};

struct Auto {
    string marka;
    string model;
    int moc;
    int przebieg;
    void Show();
    Auto();
    Auto(string marka, string model, int moc=140, int przebieg=50000);
};

void Book::Show() {
    cout << " ---- Informacje o ksiazce ----------\n";
    cout << "\ttytul: " << title << endl;
    cout << "\tautor: " << author << endl;
    cout << "\tilosc stron: " << page << endl;
}
void Auto::Show() {
    cout << " -------- Informacje o samochodzie ----------\n";
    cout << "\tmarka: " << marka << endl;
    cout << "\tmodel: " << model << endl;
    cout << "\tmoc: " << moc << " KM" << endl;
    cout << "\tprzebieg: " << przebieg << " km" << endl;
}

Book::Book() {
    cout << "Teraz konstrutor domyslny!!!" << endl;
    title = "noname";
    author = "noname";
    page = 100;
}

Auto::Auto() {
    cout << "Teraz konstrutor domyslny!!!" << endl;
    marka = "noname";
    model = "noname";
    moc = 140;
    przebieg = 50000;
}

Book::Book(string title, string author, int pages) {
    cout << "Teraz konstrutor z argumentami!!!" << endl;
    this->author = author;
    this->title = title;
    this->page = pages;
}

Auto::Auto(string marka, string model, int moc, int przebieg) {
    cout << "Teraz konstrutor z argumentami!!!" << endl;
    this->marka = marka;
    this->model = model;
    this->moc = moc;
    this->przebieg = przebieg;
}
//todo zdefiniowac strukture Samochod pola: model typ maks predkosc przebieg
// oraz dwa konstruktory i metode Show



int main()
{
    Book b1;
    Book b2("ABC programowania obiektowego", "Jan Nowak");

    Auto s1;
    Auto s2("Volvo","cx70",165,12450);
    Auto s3("Lexus","ls430",280,63000);

    b1.Show();
    b2.Show();

    cout << endl << "-------------------- POJAZDY --------------------" << endl << endl;

    s1.Show();
    s2.Show();
    s3.Show();
    return 0;
}
