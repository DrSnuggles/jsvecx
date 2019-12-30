var vecx=new VecX,transparentPixel="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";Globals.romdata=atob("7Xf4UDDoTUlORYD4UADeU1RPUk2AAI7Ig2+AjMvFJvm96ON8yCSGu7fIgI4BAb/IgY7Ig2+AjMtwJvkgAL3xr8wCAL33qQp5D1YPm47IqL34T47Ir734T47I+b34T8wAAb34fI7JAL34T8wAAb34fI7tq5/En8aGBZfZl9qX2yAkvehmEI7IxJabrqYwBK+mju2nlpuuhqYFhAMmAgzZzAABvfh8vefkjsjElpuuhqaEKwW94SkgQdzwgwAB3fAnFDQIvfGqverPzu4vveqdNQiWDyckjsiozsvrvfjYjsivzsvrvfjY3PAQJv9EvfGLDzsQzsvqfvAcNAi96vC95R694mK95Li941M1CL3rQ73sRr3slb3mRyXflr0QJ/9hlr4QJv+SfuCln8LMfwDd3Je3hiCXnI7h55+djskzn7mGHZe4D1bO7Xe99o00CL3nEb32h5YmhQEmAgq3verwverPvfKJveUevfKl9si3JxyO7yYQvsjcvep/ju9dvep/ju+Uvep/NQgK3CDANQgPnIYEl7eGf5e4lrcnSta4JwQKuCAS1ibEHyYMSpe3nsKmhsYDvemhNAi96vC98qnO7iC96p0QjuD4zu2ntsib7sa96qi95R694mK95Lg1CL3rQ73mRyCyOQq4J04M7b31F4QHiwSXnN65hoCnxNzciwinRG9F50ZvR731F00rDIEQLAKLDIFgLw4g7oHwLwKADIGgLAIg4qfIER+JHYoBp8gQb0IxyBIQn7k5AAIHEAAgGBABAAUAAyUHUAAAAQAANQAAAAAEBAgIDQ3uPe5T7m/ujjQIhsgfi5a9ECYAnJbuECYAp5YTECYAkpYUJzKW1JHWJxyR2CcIltUnFJbXJiCW14sMgX8iGJfXltSX2CAOltWLDIF/IgiX1ZbUl9YM8pbVJw6AApfV1ta957UQn8yfzpbXJw6AApfX1ti957UQn9Cf0tzI08zT0N3I3MrTztPS3cqWGycPKwQK1CAGDNQgAjQIvehMhtAfi73ypcYMEI7IyI7Lib3qjTWIhoCX7r31F4QDiwOX7wz2lu4qGQrvJw296YqXyA/J18oPyzWIBO6GH5fvNYjW78HgLwyW74AEl+9PvelKNYgP7w/uveg3NYi2yOcnKzQIhsgfi5bnJyHc3tPi3d6X3Nzg0+Td4JfdNQi98qXGCBC+yNyO77O96n85juOhn6O99ReO5EiEBq6G7IHd3JfeD9/X4A/hIFiWvyYZvfUXhH+LMJeivfUXhD+X5r31F4sQl+cgSZa9JuPGHM7JM6bEJwgzyBJaJvYgNAztCr+e3q9EnuCvRoZAp8SWwCYQjuQSn5299ReEf4tAl5wMwJ7opoCXoqaAl+amgJfnn+jW5r3ntRCf4p/kOc7IxJab7samxMYDvemhjuQmn505CsEnBob/l5wgF731Fx+JxAMmAssBzsjElpvuxqbEvemhOeRQ5GrkhOSefwAoIDBAKDAoABAwEEAYIFBAMCgwCGB/OHCAAEAAMCAQUCAoQDA+cBgwYCAYQDAkUH8GcAB/QBBgKDgwKAhAMCh/IBgwMAhoQCBQfzhwAIBAMGA4GDAwIBggOEAoEGAgADBAOFB/HHCGBM7JC47IFbfIj73yqabEJyJqSScZ7EXjQe1F7EfjQ+1HMUW96m0zSnrIjybgOW/Eesjqtsi9Ju62yO4m6aaEJ+VvhHzItmzE/MjI7UX8yMrtR/zJB+1B/MkJ7UOGGKdJfMjqIMGGHLfIj87JM6bEJgkzyBJ6yI8m9DkQKwCchUAQJgCkhSAQJgCphRAQJgDUhQEQJgDYpkGBBCdWhQEnMbbI7iYstsi9Jic0CL3xr5bIoETWyuBGvfWTgBCXg47iPuZDpoXWg73ntRCvSK9KNQjsRONI7UTsRuNK7Ua98qWO4lqmQUiuhjFE5kK96o1+5SrsRONIKRrtROxG40opEu1GvfKpMUSOy6fGBL3qjX7lKm/EesjrfuUqpkaryBCnRqHIESYCZMS98qUxRL3qbX7lKqZDgQMmDaZCocgQLAaLCKdCIBtkxKbIEKdChhinyBC2yO0mCrbIwCYFhn+3yKJ+5ZZqyBAmAmTEfuWWb8SmQYEEJxXmQ1onEDQKhsgfi6bkvemhvemhNQp+5So0CL3xqr3yqc7LK4YOt8iPpsQQJwCm5kThQSQNywPnRBCuQo7uur3qf00QKgCDesj3ECcAN7bIJoQBJgN8yPi2yPgQjn8Aju8EvedqEI5ggI7vC73nahCOgFCO7xW952oQjqCAju8cvedqIFB6yNl/yOt/yO22yHknK7bIm0SOyNr2yNnnhrbI2iYFtsjbJxq2yJuLAoQCt8ibRI7I2uaG98jZJ+u2yNkmDYYBt8i+IAbmROFBJQVvxHrI7DNFesiPECb/S73sySAFNAi98aq98qWOgDi/yJC2yNknHrfIj3rIjycWtsiRiwa3yJHGBBC+yJCO7uu96n8g5TUIliaEAUhISI7urc7Lp732H9bsJg+WvSYI1usmB9btJgMc/jkaATk0Mo7IyL3y8qbklwQfIL3zEsYMrmG99A41sjQWjssrhg7mhCcHMAVKJvcgHabkhIBMp4QqAgy9puSEf6cEpmGnAexi7QIM7AzzNZY0Nr32AadkHVhJWElYSe1i5mQdWElYSVhJ7WQ1tjQ2jd/sfFhJ7WTselhJ7WI1tobQH4u98nKGyB+LD5wPnw+iD6WOyQtvgIzLcSb5zAAA3d7d4N3i3eSX55e9l76X6pfrl+yX+MZA1/eX7ZfAjggAn/CGB5e/juOEn6PMAADdyN3KzAAAl9TdzN3Ol9WX1t3Q3dKX15fYltSO7uvOy4m99h+Gf9bUvefSEL/JB7/JCTk0MDQIvfGqvfJyNQiGoJePlsgnCisDSiABTJfID8mWyicKKwNKIAFMl8oPy5bUJwyBHy4DSiABTIQ/l9S94vKOy4HGCKaEiwOngFom9zQIvfGqverPX4YgvekLvej9NQiWyBAm/6qWyhAm/6SW1BAm/54KjxAm/5i95+Q1sI7t4BCOy3HOy4HGCIYWr6EwCKfAiw9aJvU5NB6Oy4GGCGyASib7IAI0HobQH4uGCTQCauQmB73zVDUCNZ6981SGA7fII6bkSo7LgeaGxH/hYSPf4GIv29cEjstxSK6GvfKpvfLVIMs0HobQH4uGCTQCauQmB73zVDUCNZ6981SGA7fII47IyL3y8ubkWFjrYi/fxH/XBI7LcabkSkiuhr3yqb3y1SDKNAa99Ren5L31F4FgLvmBoC31p2E1Bjk0dpbtECcAkwrtvfUXhB+Xi4EbIwSABCD2xhI9w8kzHwOmxITAJg0Mi5aLgRsv6g+LTyDlpuSnQY7iQkgQroYQn4nGIOfEjuI+pmHmhteLjuI65obnyBCnQ47iUkgQroYQr0yO4koQroYQn4eBBiYCDPSWiJuKGadPloeZiRmnTpaLveo+vee1EK9Ir0oM65bAJwiG/5echgOXwTX2NAa99RcfiYQwp2HED8EEJALLBMEMIwLABOth52E1hjQGhn+XBB8gvfLDvfNUNYY0BoZ/lwSmpOYivfLDvfNUNYY0Fh8gvfL85mG99A41ljQWHyG98vLmYa5ivfQONZY0VoZ/lwS983M11jRWHyC98vy99JU1tr3yqcz8OP3IKrbImxCO7aMQrqbO7Z/uxo3aOb3yqcz8OP3IKhCOf6DOyKiNx7bIeScJEI5/EM7Ir425Ob3xkjQIvfLmveq0tsiAvfG0/MiB/cgf/cghvfH4hsgfi5acJwgKnCYErZ/InZafJwgKnyYErZ/IoJaiJwgKoiYErZ/Io5alJwgKpSYErZ/IpjWIluonEhCOyQuGBJePbaQmBzEqCo8m9jmW5yc1NCCmJeYnHwHMBhYQnty9+P81ICQgb6QP5w+iju2flpuuhswQAL34fIYwxnCe3L3nhArqIMbOyTOGHJeQpsSEPyYJM8gSCpAm8yCqNCCmJeYnHwGmROZGHwLsTL34/zUgJOCmQYQCJ1qO7Z+Wm66G7E69+HwM9aZE5kYfAaZCxiC954TMARDtTpbIoETWyuBGvfWTgBAfiTQghj+957UQr0ivSjUgb6TMBATtTKZB5kNaJwa96aG96aGGBKdBCup+61OGAafEb6SO7Z+Wm66G7E69+HymROZGHwGmQsZAveeECusK6n7rU5a9JhmW7iYVEI7JM4Ycl4+mpIQ/JggxqBIKjybzOTQglsjWyh8BpiTmJhCuLB4gvfj/NSAk4G+kD+2WyNbKHwGmIoqAxjC954QM8wrrIM6WvSYZlu4mFZbnJxGWyNbKHwHMBhYQnty9+P8lATkP5w+ilsjWyh8BhgiKgMYwveeEDPM5tsjyJwh/yPLO7TcgMbbI8ycIf8jzzu1NICS2yLYnCH/Its7tQiAXtsj0Jwt/yPR/yPbO7VogB7bI9ibwIAO98n32yADLEMGgJAeGAL3yViAGzAgAvfJW9sgCyyDB8CQHhgK98lYgBswJAL3yVjkAEAEABh8HBggP/wI5AwAGHwcFCQ//Bh8HBwoQCwAMOA0A/wAAAQACMAMABAAFAAYfBz0IAAkPCgALAAwADQD/7Y/+tgAZARkAGQEyABkBGQAZBhkFGQCA/+7dzLuqmYh3d3d3d3d3d8ioyK9/oH8QyPnJAAAAAAACAAAAAQAAAAMAAAACAQAAAgMAAAEDAAACAgAAAQEAAAMDAAACAgIAAQEBAAMDAwCAyEA/ACCAEB8/PwC/v7/AIEgI+DCoENCgv78APz9IIIAAsEg4+ziAKDBIgIBF8Ch/P7+lANBgICi4QBWAQPhAGPo44MhNSU5FIEZJRUxEgPo44NhHQU1FIE9WRVKAABAA/yCg/8BA/5Ag/3Ag/1BQ/9CQAQAgAP8wsP+wMP+w0P8wUP/QUP9Q0P9QMP/QsAH/AAAAMAD/EMD/wBD/wPD/EED/8ED/QPD/QBD/8MAB/wAAAPDQ/8BA/yAA/0BA/wDg/0DA/+AA/8DA/wAgAQA/AP+AAAA/P/8AgAH/fyAAwBD/wND/IH8A4MD/AMD/4DAAwAD/YM3/oAAAIND/PDD/AIIAMDD/0FD/IPABAD8A/8QI/9jY/yAAAABA/+AA/yjY/zwIAQA/AP/ECAEABAj/2Nj/IAABAD8A/8T4AQAE+P/YKP8gAAEAIAD/ANj/0Kj/8ED/CBj/GPD/8LgAEEj/CAD/6BD/+AAACAD/AAYAEPr/CAD/APAAEBj/8AgBACAA/wAo/9BY//DA/wjo/xgQ//BIABC4/wgA/+jw//gA/wgA/wD6ABAG/wgA/wAQABDo//D4Af8A2P/oCP8AQP8YCP8A2AAI4P8QAP8AQP/wAP8AwAEAGAD/ACD/yHD/EKD/AKD/7KT/OW3/ACABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDOy+q98YvMcyEQs8v+J1z9y/58yDuOy+u9+E+98a/cJRCDAQEmAtdWV8QDjvD95oXXKcYC1yTO/Q299oe98ZK98om98qm2yCbO8QyFICcCM0y984WO8Om98wiGA730NHrIJCbztsgmgSAjsL3xr4bMlynM8QHdOQ8lDybOAACO8QHGC6bAoYAnDcEBJwTBBSMFzuAAIAdaJurXOdc6DFbfN+7EvfGvzPhI3Sq99oe98ZK98om98qnMwMD+yDm983q2yDsmDErOy+unRsxo0L3zev7INzNCvfOFtshWJsW+yCWMAH0jvW5BQNYAVoEAAKl+ADncjgAASnIAALbgOA4DZyBHQ0UgMTk4MoDxYCfPVkVDVFJFWIDzYCbPVkVDVFJFWID8YN/pR0NFgPw4zNFFTlRFUlRBSU5JTkeA/Di83E5FVyBJREVBU4AAjVzMn//dAswBAN0AzJh/lwvXBL3zVCA+jUnGeo7IAL31P8zIfd17DH0n/IYFlyjMMHXdPcwBA90fzAUH3SE5jdeNvX7ycr7IJTABv8gljQ6GIJUNJ/z8yD3dCH7y5obQH4s5hsgfizm0yA+3yA+OyBKmHacehg6XAcwZAZcAEtcADwPMCQGXABKWAUOnHdcAxv/XA0OqHkOnHzQCxgEfmKTkp4BYJvc1gnrII47IH6aAJgyMyCMm92+EhgGXADmXAA8BCgDGYFwq/bbIIyslhiAMAJUAJwrGQNcBlQAmCyAIxsDXAZUAJwFf5xsgxR+YmgGXAYYglQAmBh+YmAGXAVTxyBom6NYBIOCOyADnhpcBhhmXAIYBlwCWAdcBxhHXAMYB1wA5zA4Ajd9KKvt+9TOOyAAgAo3V7MEq+jmOyADOyD+GDebA4YYnAo3ASir1OYYfIAqGPyAGhl8gAoZ/lwG3yCfMBQSXANcA1wDGAdcAOffIKOyBjU2G/5cK9sgoWib9Dwo5esgjjeq2yCMm9iB2poAuco3dIPiO+fCNHb3za40gIGLGf9cEpoTmAiAWlwE0BoZ/lwQPACAQxv8gAsZ/1wTsgZcBDwA0BobOlwwPCgwA1wEPBTUGvfWE53+qf8ZAgUAjEoFkIwSGCCAChgTVDSf8Sib9OdUNJ/w5vfGqIAW2yCQnFswAzNcMlwrMAwIPAZcA1wDXAMYB1wA5zADM1wyXCjnswf3IKuzBvfL8vfV1fvSVje6mxCb6OY3spsQm+jmuhDQExoAzeDYGNQKBCSMChjyLMMYtNgY2ECDLpoAgCNcEIAfsgdcEt8gj7ISXAQ8AMAISDADXAcwAACAfpoAgCNcEIAfsgdcEt8gj7ISXAQ8AMAISDADXAcz/AJcK1wXMAEDVDSf8EpcKtsgjSirZfvNPxv8gBsZ/IALmgNcE7AGXAQ8ApoQwAwwA1wGXCg8FzABA1Q0n/BKXCqaEL+B+809Kt8gj7ISXAQ8AMAIMANcBtsgpxkCXCg8F9dANJwsPCrbIIybbObbIKZcKEtUNJ/a2yCMPCk0myH7zT7bIJDQCf8gkpoAqBI27IPgmBb3zvCDxSicFvfPdIOk1ArfIJH7zT//ILI751MwYgw8BlwuO+dTXAAoAzICBEgwA1wCXAH3IAAwAtsgrlwHMAQD+yCyXACAEpoaXCqbAKviGgZcAAAGGAZcAjPu0JywwiFAfMLPILMACWCEAhoESWib6lwD2yCrXAQoAzIEBEpcADwHXAJcAxgMgm4aYlwt+81Q0FMYCIAM0FF++yHumAUlJSUmoAkZphGkBaQJaKu6mhDWUxg2OyD+NBYY/pwY5TyAGjsgAzAD/b4uDAAEq+TmGgKeFWib7p4Q5xgIgAsYFjsgubYUnAmqFWir3OcYDIAnGAiAFxgEgAV9aKv05jvncpoY5TSoEQCgBSl0qBFAoAVo5NBDdNFnGAFlJWVjXNtw0jeCXNNE0IwgMNh6JIAJEVIEJIvrdNNY2jvwk5oWO/Cymhps1iwrFASYE64YgA1rghtc2ljY1kIsQjvxtX4UgJwLGgIQfgRAmAVymhjk0EJY2jebdN5Y2jd7dOTWQwBDXNpc7jeiNVEA0Ao1VNYS3yDb3yCM0CL3xr43SIBi3yDY0CL3xr5cjjcSmgKfALwYPIzWICiOmgI0mp8SmhI0aq8SnwKYfjRKnxKaAjRKgxKfAliMr1CbcNYiXO9w3IASXO9w51zzFAScEljsgCtY7KgMDPFA9iQDWPCoBQDnmxueGSir5OZZWKygn+Y78jZ9NhoCXVuzB3U/swd1R31O99TPMHx/dX8wAAN1j3WWXVSA5zshexgKmxYEfJwJsxVoq9Z5RzshYhgdsxKHELAJvxObAxAfmhefATIEJI+sKVyZrllVKKgKGApdV5p/IU87IXm/GxUAnGY755KaGlEWXRZZViwOmhppFl0XEH9dGICOO+eqmhpRFl0WWVYsDpoaaRZdFllVIiwMzxsQ/WJ5N7IXtxJ5T5oCfU10rpeaAKga99TMPVjmfU8Q/11cQnk/OyF6OyEKGAubAxQEnB1TmpcQPIAdU5qVUVFRU54ZKKufOyGeOyEfsw21YKgpgWOBYggBgWCAE61iJAO2BjMhNJuU5IMBAwFBMQVlFUoDgwAHAIEdBTUWA/chPTScChgFdJwLGAf3Ieb3xr8z4UN0qlzwgZ73xkk+98bS99Vq98qm2yHkQjveUjVq2yHoQjvefjVG98a+WPCcGlg8mPQ88li8nnpYuJsyWFSaWlhInD5Z5JwtMkU8jAoYBl3kgHJZ6J7HWEycJTJFQIw2GASAJ1hQnoEomApZQl3qG85cvQ5cuIJCOyF40Ao0TpuAnDo0cHxPsob3zeh8jvfN4OcwgIO2E7QKnBMwwgO0FOc4AAIFjIwiAZDPJAQAg9IEJIweACjPIECD1M8YfMDQCNATGBU/BASMQxQEnBKbkIAam4ERERESED7vII3/II6uFgS8uAosQgTkjBYAKfMgjp4VaKs9/yCNfpoWBMCYJhiCnhVzBBS3xOTRQT+aAKwjhwCf4IgFMTDXQje2BASYGpoCnwCr6OTQgNDbsZKvE60HtZCAQNCA0Nh8wq2TrZSDwNCA0Nh9BXzqmBKuEKAKGf6ECLRWmBKCEKAKGgKECLglcwQIl4hoBIAIc/jU2NaCWZyophH+XZ47IWIYEvfaDVFRU2ljEB9dU1ljEONdT1ljEB9ddxgLXXIZ/IA2WdydqkFsqBV/XdyBil3dERNZTJw2XRtZZKwUnBR+JU9dGRIEHIwWBDycBTNZaKwYnAogPH4mNN9ZdJyuWXEoqAoYCl1y99X6VXSfw1lxYUI7ISzCFvfUXhA+BBSIDSIsFp4SWfqcBllhDlEWXRTmWVI7IRU0nCTAfRCT454Qg9DkBAgQIECBAgPfv3wECBP79+wgQIH9/gIAAIFBQIMggEBBAIAAAAAAIMCBwcBD4MPhwcABgAAAAcHAg8HDw+Ph4iHAIiICIiPjwcPBw+IiIiIiI+HCAcCAAACAIIAAAADgQIEREAP7//gBwUFB4yFAgICCoIAAAAAhIYIiIMIBACIiIYGAQAECIiFBIiEiAgICIIAiQgNjIiIiIiIioiIiIiIgIQIAIUAAAcAwgcHAARBBwAABsgv/+AHBQ+KAQUEBAEHAgAAAAEEggCAhQ8IAQiIhgACB4IAioiEiASICAgIggCKCAqKiIiIiIQCCIiIhQUBBAQAiIAHCoCiCI+GC6OCAAAJKC//4AIABQcCBgAEAQqPgAcAAgSCBwMJAI8CBweABgQAAQELiIcIBI4OCY+CAIwIComIjwiPAgIIhQqCAgIEAgCAAA/iAIIIj48KI4+II4koL//gAAAPhwQKgAQBCoIEAAAEBIIIAI+AiIQIgIYGAgeCAgsPhIgEiAgIiIIAiggIiIiICooBAgiFCoUCBAQBAIAAD+IHioiPjwunwgRERsgv/+AAAAUCiYkAAgIAAgQAAAgEgggIgQiIiAiBBgIBAAQACAiEiISICAiIggiJCIiIiIgJCQiCCIIKiIIIBACAgAAEgg8HBwcGBEbFA4ggCC//4AIABQ+JhoABBAAACAAICAMHD4cBBwcIBwYABAAAAAIHiI8HDw+IB4iHBwiPiIiPiAaIhwIHAgUIgg+HAIcAD4ACBgIAAAADiCiAAAAP7//gARQTAhECAxAAEDBgoPFRwkLQgQCBALCBANCggQDgsJCBAODAoJCBAODQsKCQgQDw0MCwoJCBAPDgwLCgkJCBAPDg0MCwoJCQgAGTJKYnmOorXG1eLt9fv////79e3i1ca1oo55YkoyGQO9A4cDVAMkAvcCzQKkAn4CWwI5AhkB+wHeAcMBqgGSAXwBZgFSAT8BLQEcAQwA/QDvAOIA1QDJAL4AswCpAKAAlwCOAIYAfwB4AHEAawBlAF8AWgBVAFAASwBHAEMAPwA8ADgANQAyAC8ALQAqACgAJgAkACIAIAAeABwAGwAA/uj+tpMfDJMfBpifJDwRgP1p/XkhByEHIQchByEHIQchDpmfJA6VmyAOIQchByEHIQchByEHnaMoDqCmKw4iAigCLQIoAiICKAItAigCIgIoAi0CKAIuAi0oIYDv//7cugAAAAAAAAAAAAAAAAECAQD//v/9w/62USRQBlAGUAxQBlAGUARQBFAEUBhQBFAEUARQDFAMUCRQBlAGUAxQBlAGUARQBFAEUBhQBFAEUARQDFAYJoD9uph2VUQzIhEAAAAAAAAA/ij9eZgcED8ImBwEmBwEmBwQPwiYHASYHASYHAiTGAiYHAicHwiYHAiTGAiYHAiTGAiYHAicHwiYHAiTGAiYHAiTGAiYHAicHwiYHAiTGAicHzAagP/+3LqYdlQyEAAAAAAAAAD+Zv62DBgRGAwYERgMGBEYDBIMBhEYnSEYnyMYoSQYoyYYn6QoGAcSBwYAPBiA3u/+3LoAAAAAAAAAAAAAAP6y/rYYBhoGHAwYDBokIxgXBhgGGgwXDBgkJBikKAyjJgyhJAyfIwydIRiaHxgXBhgGGgwXDBgkJCQYgP/u3cwAAAAAAAAAAAAAAAAAAAAA/uj+tpaaHR6RlRgelJgbHo+UGBQWCoyRFRQWCpGVGDIYgO7//+7u3cy7qpmIiIiIiIj/Fv62HAYfBhwGGAYaBhgGFQYTBhgGEwYXBhgeGID//+7u3d3MzAAAAAAAAAAA/ij+thYPFgUWBRYFGg8WDx0PHQUdBR0FIQ8dMh2A/ij+thYGFgIWAhYCGgYWBh0GHQIdAh0CIQYdMhGA/ij+thsPFgUWBRYFFzAWBRYFFgUXMBaA/Wn+tqAjEqAjDJwgBp4hEpwgMhOA/cP+thYEFgQWBBYEGggcgKagIAi98762yICEf7fIgHrIgKakR4T45qBYWFhYV8T4fciAK9+989+2yICFDybghSAnzTlLQVJSU09GVDgyTERNQ0JDSlQ4MkxETUNCQ0oAAAAAy/LL8sv1y/jL+8v78AA=");var overlayDir="img/overlays_1080/",overlayName="";function switchRom(A){vecx.stop(),vecx.osint.osint_clearscreen(),vecx.doBankSwitching=!1,vecx.currentBank=0,"object"==typeof A?(console.info("dropped rom has CRC32",CRC32(Globals.cartdata).toString(16)),overlay.src=transparentPixel,romName="",vecx.reset()):(-1<A.indexOf("Academy")?setOverlay(A.substr(A.lastIndexOf("roms/")+1).split("_")[0].replace(/ /g,"")):setOverlay(A.substr(A.lastIndexOf("/")+1).split("_")[0].replace(/ /g,"")),loadRom("roms/"+A+".bin"))}function loadRom(e){var A=new XMLHttpRequest;A.open("GET",e,!0),A.overrideMimeType("text/plain; charset=x-user-defined"),A.onload=function(A){Globals.cartdata=A.target.response,console.info("loaded rom",e,"has CRC32",CRC32(A.target.response).toString(16)),stat.innerText="Loaded.",vecx.doBankSwitching=-1<e.toLowerCase().indexOf("vectorblade"),vecx.reset()},A.send()}function doinit(){stat.innerText="Starting up...";var A=[];for(var e in A.push('<option value="">Select a cartridge...</option>'),romList){for(var t in A.push('<optgroup label="'+e+'">'),romList[e])A.push('<option value="'+e+"/"+romList[e][t]+'">'+romList[e][t]+"</option>");A.push("</optgroup>")}roms.innerHTML=A.join(""),roms.onchange=function(A){""!=(A=A.srcElement).value&&(stat.innerText="Loading "+A.text+" ...",switchRom(A.value))},overlay.onload=function(A){resizer()},overlay.onerror=function(A){overlay.src=transparentPixel},addEventListener("contextmenu",toggleMenu,!1),addEventListener("resize",resizer,!1),resizer(),Globals.SCREEN_X_DEFAULT=vecscr.width,Globals.SCREEN_Y_DEFAULT=vecscr.height,vecx.main(vecscr),setInterval(function(){stat.innerText=vecx.status},2e3)}function toggleMenu(A){A&&A.preventDefault(),"block"==menu.style.display?(menu.style.display="none",setTimeout(function(){vecx.start()},300)):(vecx.stop(),menu.style.display="block")}function toggleFullscreen(){window.innerWidth==screen.width&&window.innerHeight==screen.height?document.exitFullscreen():document.documentElement.requestFullscreen()}function toggleAA(){vecscr.classList.toggle("noAA"),overlay.classList.toggle("noAA"),overlay.classList.contains("noAA")?stat.innerText="AntiAlias turned off.":stat.innerText="AntiAlias turned on."}function toggleGP(){input.gamepads.toggleGP()?stat.innerText="Gamepad turned on.":stat.innerText="Gamepad turned off."}function toggleSound(){var A=vecx.toggleSoundEnabled();stat.innerText=A?"Sound turned on.":"Sound turned off."}function toggleOverlay(){overlay.classList.toggle("fadeOut"),overlay.classList.contains("fadeOut")?(stat.innerText="Overlay turned off.",setTimeout(toggleOverlayDir,500)):stat.innerText="Overlay turned on."}function togglePause(){vecx.running?(vecx.stop(),stat.innerText="Paused."):(vecx.start(),stat.innerText="Resumed.")}function toggleSwitchKeys(){input.keys.switchKeys=!input.keys.switchKeys,input.keys.switchKeys?stat.innerText="Keyboard = Player 2":stat.innerText="Keyboard = Player 1"}function toggleSwitchGP(){input.gamepads.switchGP=!input.gamepads.switchGP,input.gamepads.switchGP?stat.innerText="Joy 1=Player 2, Joy 2=Player 1":stat.innerText="Joy 1=Player 1, Joy 2=Player 2"}function toggleQuality(){var A,e=Globals.SCREEN_X_DEFAULT;A=330==e?(e=660,820):660==e?(e=990,1230):(e=330,410),Globals.SCREEN_X_DEFAULT=vecscr.width=e,Globals.SCREEN_Y_DEFAULT=vecscr.height=A,stat.innerText=e+" x "+A,vecx.main(vecscr)}function toggleOverlayDir(){-1<overlayDir.indexOf("img/overlays")&&(overlayDir="img/overlays/"===overlayDir?"img/overlays_1080/":"img/overlays/",overlay.src=overlayDir+overlayName+".png")}function setOverlay(A){loadOverlay(-1<(overlayName=A).indexOf("/")?(overlayDir=A.substr(A.indexOf("/")),"img/"+A+".png"):(overlayDir="img/overlays_1080/")+overlayName+".png")}function loadOverlay(A){overlay.src=A}function toggleRTM(){document.getElementById("rtm6809")?(document.getElementById("rtm6809").classList.toggle("fadeIn"),document.getElementById("rtm8912").classList.toggle("fadeIn"),document.getElementById("rtm6522").classList.toggle("fadeIn"),document.getElementById("rtmROMRAM").classList.toggle("fadeIn")):loadHead("script","js/rtm.js",function(){})}function resizer(){var A=window.innerWidth,e=window.innerHeight;A/e<351/449?(overlay.style.width=A+"px",overlay.style.height="auto",vecscr.style.width=330/351*A+"px",vecscr.style.height="auto"):(overlay.style.height=e+"px",overlay.style.width="auto",vecscr.style.height=410/449*e+"px",vecscr.style.width="auto");var t=overlay.clientWidth-vecscr.clientWidth,i=overlay.clientHeight-vecscr.clientHeight;vecscr.style.left=t/2+"px",vecscr.style.top=i/2+"px",t=A-overlay.clientWidth,i=e-overlay.clientHeight,wrapper.style.left=t/2+"px",wrapper.style.top=i/2+"px",menu.style.width=.8*overlay.clientWidth+"px",menu.style.height=.8*overlay.clientHeight+"px",menu.style.left=.1*overlay.clientWidth+"px",menu.style.top=.1*overlay.clientHeight+"px"}function loadHead(e,A,t){xhr(A,function(A){addHead(e,A,t)})}function addHead(A,e,t){var i=document.createElement(A);i.type="script"===A?"text/javascript":"text/css",i.appendChild(document.createTextNode(e)),document.head.appendChild(i),t&&t()}function xhr(A,e){var t=new XMLHttpRequest;t.open("GET",A,!0),t.onreadystatechange=function(){4==this.readyState&&200==this.status&&e(this.responseText)},t.send()}function CRC32(A){for(var e,t=[],i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}for(var g=-1,o=0;o<A.length;o++)g=g>>>8^t[255&(g^A.charCodeAt(o))];return(-1^g)>>>0}function visChg(){(document.hidden||document.webkitHidden||document.msHidden)&&(vecx.running&&(vecx.stop(),stat.innerText="Paused."),menu.style.display="block")}function printScreen(){var t=document.createElement("a"),i=new Date;i=i.toISOString(),t.setAttribute("download","JSVecX_"+i+".png"),vecx.osint.canvas.toBlob(function(A){var e=URL.createObjectURL(A);t.setAttribute("href",e),t.click(),console.log("Screenshot saved as: JSVecX_"+i+".png")})}!function(){function A(A){A=A.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+A+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}doinit();var e=A("sound");e&&"true"!==e&&"on"!==e&&toggleSound();var t=A("pause");t&&("true"!=t&&"on"!=t||togglePause());var i=A("menu");i&&("true"!=i&&"on"!==i||toggleMenu());var n=A("rtm");n&&("true"!=n&&"on"!=n||toggleRTM());var g=A("aa");g&&"true"!==g&&"on"!==g&&toggleAA();var o=A("overlay");if(o&&o==1*o)for(var I=0;I<o;I++)toggleOverlay();document.addEventListener("visibilitychange",visChg,!1),document.addEventListener("webkitvisibilitychange",visChg,!1),document.addEventListener("msvisibilitychange",visChg,!1),window.addEventListener("blur",function(){vecx.stop(),document.getElementById("menu").style.display="block"},!1),document.addEventListener("keyup",function(A){switch(A.key){case"PrintScreen":printScreen();break;case"Pause":togglePause();break;case"Escape":toggleMenu()}},!1);var r=A("rom");if(r)if(-1<r.indexOf("//"))loadRom(r),loadOverlay(r.substr(0,r.length-3)+"png");else{for(var I in romList)for(var s in romList[I])if(-1!==romList[I][s].toLowerCase().indexOf(r.toLowerCase()))return switchRom(I+"/"+romList[I][s]);setOverlay("MineStorm")}else setOverlay("MineStorm")}();