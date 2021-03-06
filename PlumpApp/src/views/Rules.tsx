import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Rules: React.FC<{}> = () => {
  const styles = StyleSheet.create({
    titleText: {
      fontWeight: 'bold',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        How to play Plump? Plump is a fun card game for 2+ players. The game is
        about succeeding in taking the number of sticks you predicted from the
        beginning. Preparations You need a game protocol and a standard deck of
        52 cards. The protocol can look like the bottom of the page. Basic rules
        of the game You must always follow the color. If you do not have a card
        in the suit that has been added, you can add any card you want. If you
        fail, a so-called "plump" is put in the game protocol, hence the name of
        the card game. Taking a stick means that you have the highest card of
        those who are laid out. Or that you added a color that no other player
        has. It is therefore very good to have many cards of the same suit. 1
        card In the first round, all players receive 10 cards each. Then the
        players (clockwise) start to guess how many sticks they think they will
        take during this game round. You can bet on anything between 10 and 0
        sticks. The number of predicted sticks must never be evenly distributed
        on the game protocol. The last player can not always choose what he
        wants. (EX about 3 players: Player 1 bets on 5 sticks, player 2 on 5
        sticks, player 3 may not choose 0 sticks) After the round has been
        played, you see who has managed to take exactly as many sticks as they
        predicted. If a player succeeds, he gets a one in front of the number of
        sticks. See minutes at the bottom of the page. The game rounds now
        continue with fewer cards at a time, according to the game protocol.
        Winner When it's time for a round with only one card per person, there
        are several different variations. Each player can look at their card and
        decide if it pays or not (0 or 1 stick). Each player holds the card up
        in the forehead, without looking at it himself. By seeing the other
        cards, the player then decides whether he thinks his own card is better
        or worse. No player looks at any card and all chances are 0 or 1 stick.
        In the end, all points are counted and the player with the most points
        wins.
      </Text>
    </SafeAreaView>
  );
};
