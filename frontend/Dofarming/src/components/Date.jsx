import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/ko';
import { useState } from 'react';

const Date = ({ date, onSelectDate, selected }) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  moment.locale('ko');
  const day = moment(date).format('ddd');
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('D');

  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format('YYYY-MM-DD');
  const today = '2023-11-12';
  useState(() => {
    onSelectDate(fullDate);
  }, []);
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[
        styles.card,
        selected === fullDate && { backgroundColor: 'rgb(62, 139 64)' },
      ]}
    >
      <Text style={[styles.big, selected === fullDate && { color: '#fff' }]}>
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 17,
          },
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default Date;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 70,
    width: 40,
    marginHorizontal: 5,
  },
  big: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  medium: {
    fontSize: 16,
  },
});
