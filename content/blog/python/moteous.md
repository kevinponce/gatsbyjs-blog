---
title: Moteous Python
date: "2021-05-18T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to use Moteous with python
---

```python
"""
This example commands a single servo at ID #1 using the default
transport to hold the current position indefinitely, and prints the
state of the servo to the console.
"""

import asyncio
import math
import moteus

async def main():
    # By default, Controller connects to id 1, and picks an arbitrary
    # CAN-FD transport, prefering an attached fdcanusb if available.
    c = moteus.Controller()

    # In case the controller had faulted previously, at the start of
    # this script we send the stop command in order to clear it.
    await c.set_stop()


    # `set_position` accepts an optional keyword argument for each
    # possible position mode register as described in the moteus
    # reference manual.  If a given register is omitted, then that
    # register is omitted from the command itself, with semantics
    # as described in the reference manual.
    #
    # The return type of 'set_position' is a moteus.Result type.
    # It has a __repr__ method, and has a 'values' field which can
    # be used to examine individual result registers.
    state = await c.set_position(position=math.nan, query=True)

    # Print out everything.
    print(state)

    # Print out just the position register.
    print("Position:", state.values[moteus.Register.POSITION])

    # Wait 20ms between iterations.  By default, when commanded
    # over CAN, there is a watchdog which requires commands to be
    # sent at least every 100ms or the controller will enter a
    # latched fault state.
    await asyncio.sleep(0.02)
    
    print(await c.set_position(
        position=math.nan,
        velocity=0.5,
        maximum_torque=2.0,
        stop_position=0.8,
        query=True))
    
    await asyncio.sleep(5.02)
    await c.set_stop()
if __name__ == '__main__':
    asyncio.run(main())

```