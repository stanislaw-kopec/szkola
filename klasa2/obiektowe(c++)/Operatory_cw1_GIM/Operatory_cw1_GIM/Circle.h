#pragma once

#include "Point.h"

#include <cmath>
#include <corecrt_math_defines.h>


class Circle
{
private:
	double radius{ 0 };
	Point center;

public:
	Circle();
	Circle(double radius, Point p);
	friend std::ostream& operator<<(std::ostream& os, const Circle& c);
	double Area() {
		return M_PI * radius * radius;
	}
	double Circuit() {
		return 2 * M_PI * radius;
	}
	double Distance() {
		return center.Distance();
	}
	double Distance(const Circle & c) {
		return center.Distance(c.center);
	}
	void Info();
	bool IsCenterInside(const Circle& c) {
		return Distance(c) < radius;
	}
	bool IsWholeInside(const Circle& c) {
		return Distance(c) + c.radius <= radius;
		//czy kolo c jest ca³e wewn¹trz tego ko³a
	}
	bool IsThisCircleInside(const Circle & c) {
		return Distance(c) + radius <= c.radius;
		//czy nasze kolo  jest ca³e wewn¹trz  ko³a c
	}
	void SetRadius(double radius ) {
		this->radius = radius;
	}

	//Czy maja wsplna czesc
	bool CommonParts(const Circle& c) {
		//odleg³oœæ miedzy œrodkami kó³ jest mniejsza od sumy promieni, wiêc maj¹ wspóln¹ czeœæ
		return Distance(c) <= radius + c.radius;
	}
	//todo czy maja 1 punkt wspolny
	bool CommonPoint(const Circle& c) {
		//odleg³oœæ miedzy œrodkami okrêgów jest równa sumie promieni, wiêc maj¹ jeden wspólny punkt
		return Distance(c) == radius + c.radius;
	}

	//todo czy maja 2 punkty wspolne
	bool CommonPointss(const Circle& c) {
		if (CommonPoint(c) == 1) return 0;
		//odleg³oœæ miedzy œrodkami okrêgów jest mniejsza od sumy promieni i jedno nie jest wewn¹trz drugiego, wiêc maj¹ jeden wspólny punkt
		return Distance(c) <= radius + c.radius && !IsWholeInside(c) && !IsThisCircleInside(c);
	}

	//todo maja wszystkie punkty wspolne
	bool CommonPartsAll(const Circle& c) {
		//maj¹ œrodek w tym samym miejscu i maj¹ ten sam promieñ
		return c.radius == radius && Distance(c) == 0;
	}
};

