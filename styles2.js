import {StyleSheet} from 'react-native';


const styles2 = StyleSheet.create({
listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },

  listLabelContainer: {
    width: '10%',
  },

  listLabel: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Outfit-Bold',
  },

  listContent: {
    width: '90%',
    paddingLeft: 4,
  },

  listText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Outfit-Regular',
    flexShrink: 1, // ✅ Prevents overflow
    flexWrap: 'wrap', // ✅ Technically optional for <Text> but safe
  },
})
