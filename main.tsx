<RenderHtml
                              contentWidth={width * 0.9 - 40}
                              source={{
                                html:
                                  language === 'en'
                                    ? questions[currentQuestionIndex]?.question
                                        ?.questionDesc
                                    : questions[currentQuestionIndex]?.question
                                        ?.questionDescHi,
                              }}
                              renderers={{
                                li: ({tnode}) => {
                                  const index =
                                    tnode.parent?.children?.indexOf(tnode) ?? 0;
                                  const label = `(${String.fromCharCode(
                                    97 + index,
                                  )})`;

                                  const phrasingNode = tnode.children?.[0];
                                  const actualText = phrasingNode?.children
                                    ?.map(child => child.data || '')
                                    .join('')
                                    .trim();

                                  console.log('✅ actualText:', actualText);

                                  return (
                                    <View
                                      style={{
                                        // flex: 1,
                                        flexDirection: 'column',
                                        // borderWidth: 1,
                                        // borderColor: 'cyan',
                                        width: '100%',
                                      }}>
                                      <View style={styles2.listItem}>
                                        <View
                                          style={styles2.listLabelContainer}>
                                          <Text style={styles2.listLabel}>
                                            {label}
                                          </Text>
                                        </View>
                                        <View style={styles2.listContent}>
                                          <Text style={styles2.listText}>
                                            {actualText}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  );
                                },
                              }}
                              tagsStyles={{
                                p: {
                                  fontSize: 14,
                                  color: '#000',
                                  marginBottom: 8,
                                  fontFamily: 'Outfit-Regular',
                                },
                                ul: {
                                  marginVertical: 8,
                                  listStyleType: 'none',
                                },
                                li: {
                                  fontSize: 14,
                                  color: '#000',
                                  marginBottom: 4,
                                  fontFamily: 'Outfit-Regular',
                                  listStyleType: 'none',
                                },
                              }}
                            />
